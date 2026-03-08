import { Events, GuildMember, EmbedBuilder, TextChannel, PartialGuildMember } from 'discord.js';
import { logger } from '../utils/logger';
import { Guild } from '../models/Guild';

module.exports = {
    name: Events.GuildMemberRemove,
    async execute(member: GuildMember | PartialGuildMember) {
        try {
            // Get guild settings
            const guildSettings = await Guild.findOne({ guildId: member.guild.id });

            // Update guild analytics
            if (guildSettings?.analytics.enabled) {
                await Guild.findOneAndUpdate(
                    { guildId: member.guild.id },
                    { $inc: { 'analytics.memberLeaves': 1 } }
                );
            }

            // Handle goodbye message
            if (guildSettings?.goodbye.enabled && guildSettings.goodbye.channel) {
                const goodbyeChannel = member.guild.channels.cache.get(guildSettings.goodbye.channel) as TextChannel;
                
                if (goodbyeChannel) {
                    const goodbyeMessage = guildSettings.goodbye.message
                        .replace('{user}', member.user?.username || 'Unknown User')
                        .replace('{username}', member.user?.username || 'Unknown User')
                        .replace('{server}', member.guild.name)
                        .replace('{membercount}', member.guild.memberCount.toString());

                    if (guildSettings.goodbye.embed) {
                        const goodbyeEmbed = new EmbedBuilder()
                            .setTitle('Member Left 👋')
                            .setDescription(goodbyeMessage)
                            .setColor('#ff0000')
                            .setThumbnail(member.user?.displayAvatarURL() || null)
                            .addFields(
                                { name: 'Member Count', value: `${member.guild.memberCount}`, inline: true },
                                { name: 'Joined Server', value: member.joinedAt ? `<t:${Math.floor(member.joinedAt.getTime() / 1000)}:R>` : 'Unknown', inline: true }
                            )
                            .setTimestamp()
                            .setFooter({ text: member.guild.name, iconURL: member.guild.iconURL() || undefined });

                        await goodbyeChannel.send({ embeds: [goodbyeEmbed] });
                    } else {
                        await goodbyeChannel.send(goodbyeMessage);
                    }
                }
            }

            logger.info(`${member.user?.tag || 'Unknown User'} left ${member.guild.name}`);
        } catch (error) {
            logger.error(`Error handling member leave:`, error);
        }
    }
};