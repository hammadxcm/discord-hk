import { Events, GuildMember, EmbedBuilder, TextChannel } from 'discord.js';
import { logger } from '../utils/logger';
import { User } from '../models/User';
import { Guild } from '../models/Guild';

module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member: GuildMember) {
        try {
            // Get guild settings
            const guildSettings = await Guild.findOne({ guildId: member.guild.id });
            
            // Create or update user record
            await User.findOneAndUpdate(
                { userId: member.id, guildId: member.guild.id },
                {
                    userId: member.id,
                    guildId: member.guild.id,
                    username: member.user.username,
                    discriminator: member.user.discriminator,
                    avatar: member.user.avatar,
                    joinDate: new Date()
                },
                { upsert: true, new: true }
            );

            // Update guild analytics
            if (guildSettings?.analytics.enabled) {
                await Guild.findOneAndUpdate(
                    { guildId: member.guild.id },
                    { $inc: { 'analytics.memberJoins': 1 } }
                );
            }

            // Handle welcome message
            if (guildSettings?.welcome.enabled && guildSettings.welcome.channel) {
                const welcomeChannel = member.guild.channels.cache.get(guildSettings.welcome.channel) as TextChannel;
                
                if (welcomeChannel) {
                    const welcomeMessage = guildSettings.welcome.message
                        .replace('{user}', `<@${member.id}>`)
                        .replace('{username}', member.user.username)
                        .replace('{server}', member.guild.name)
                        .replace('{membercount}', member.guild.memberCount.toString());

                    if (guildSettings.welcome.embed) {
                        const welcomeEmbed = new EmbedBuilder()
                            .setTitle('Welcome to the Server! 👋')
                            .setDescription(welcomeMessage)
                            .setColor('#00ff00')
                            .setThumbnail(member.user.displayAvatarURL())
                            .addFields(
                                { name: 'Member Count', value: `${member.guild.memberCount}`, inline: true },
                                { name: 'Account Created', value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>`, inline: true }
                            )
                            .setTimestamp()
                            .setFooter({ text: member.guild.name, iconURL: member.guild.iconURL() || undefined });

                        await welcomeChannel.send({ embeds: [welcomeEmbed] });
                    } else {
                        await welcomeChannel.send(welcomeMessage);
                    }
                }
            }

            // Handle auto role assignment
            if (guildSettings?.autoRole.enabled && guildSettings.autoRole.roles.length > 0) {
                const delay = guildSettings.autoRole.delay * 1000; // Convert to milliseconds
                
                setTimeout(async () => {
                    try {
                        for (const roleId of guildSettings.autoRole.roles) {
                            const role = member.guild.roles.cache.get(roleId);
                            if (role && !member.roles.cache.has(roleId)) {
                                await member.roles.add(role);
                            }
                        }
                        logger.info(`Auto roles assigned to ${member.user.tag} in ${member.guild.name}`);
                    } catch (error) {
                        logger.error(`Error assigning auto roles to ${member.user.tag}:`, error);
                    }
                }, delay);
            }

            // Send DM welcome message if enabled
            if (guildSettings?.welcome.dmWelcome && guildSettings.welcome.dmMessage) {
                try {
                    const dmMessage = guildSettings.welcome.dmMessage
                        .replace('{user}', member.user.username)
                        .replace('{server}', member.guild.name);

                    await member.send(dmMessage);
                } catch (error) {
                    logger.warn(`Could not send DM welcome message to ${member.user.tag}: ${error}`);
                }
            }

            logger.info(`${member.user.tag} joined ${member.guild.name}`);
        } catch (error) {
            logger.error(`Error handling member join for ${member.user.tag}:`, error);
        }
    }
};