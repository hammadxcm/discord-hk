import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ComponentType } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help and information about the bot commands'),
    
    async execute(interaction: ChatInputCommandInteraction) {
        const helpEmbed = new EmbedBuilder()
            .setTitle('🤖 Discord HK Bot - Help Center')
            .setDescription('Welcome to the ultimate Discord server management bot! Select a category below to explore commands.')
            .setColor('#7289DA')
            .addFields(
                { name: '🛡️ Moderation', value: 'Advanced moderation and security tools', inline: true },
                { name: '🎮 Fun & Games', value: 'Entertainment and engagement features', inline: true },
                { name: '🔧 Utility', value: 'Helpful utility commands', inline: true },
                { name: '💰 Economy', value: 'Server economy and rewards system', inline: true },
                { name: '📊 Analytics', value: 'Server statistics and insights', inline: true },
                { name: '⚙️ Configuration', value: 'Bot settings and customization', inline: true }
            )
            .setThumbnail(interaction.client.user?.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: 'Discord HK Server', iconURL: interaction.guild?.iconURL() || undefined });

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('help_category')
            .setPlaceholder('Choose a category to explore')
            .addOptions([
                {
                    label: 'Moderation',
                    description: 'Advanced moderation and security commands',
                    value: 'moderation',
                    emoji: '🛡️'
                },
                {
                    label: 'Fun & Games',
                    description: 'Entertainment and engagement features',
                    value: 'fun',
                    emoji: '🎮'
                },
                {
                    label: 'Utility',
                    description: 'Helpful utility commands',
                    value: 'utility',
                    emoji: '🔧'
                },
                {
                    label: 'Economy',
                    description: 'Server economy and rewards',
                    value: 'economy',
                    emoji: '💰'
                },
                {
                    label: 'Analytics',
                    description: 'Server statistics and insights',
                    value: 'analytics',
                    emoji: '📊'
                },
                {
                    label: 'Configuration',
                    description: 'Bot settings and customization',
                    value: 'config',
                    emoji: '⚙️'
                }
            ]);

        const row = new ActionRowBuilder<StringSelectMenuBuilder>()
            .addComponents(selectMenu);

        const response = await interaction.reply({
            embeds: [helpEmbed],
            components: [row],
            ephemeral: true
        });

        const collector = response.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 60000
        });

        collector.on('collect', async i => {
            if (i.user.id !== interaction.user.id) {
                await i.reply({ content: 'This help menu is not for you!', ephemeral: true });
                return;
            }

            const category = i.values[0];
            let categoryEmbed: EmbedBuilder;

            switch (category) {
                case 'moderation':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('🛡️ Moderation Commands')
                        .setColor('#ff0000')
                        .setDescription('Advanced moderation tools to keep your server safe')
                        .addFields(
                            { name: '/warn', value: 'Warn a member for rule violations', inline: true },
                            { name: '/mute', value: 'Temporarily mute a member', inline: true },
                            { name: '/kick', value: 'Kick a member from the server', inline: true },
                            { name: '/ban', value: 'Ban a member from the server', inline: true },
                            { name: '/unban', value: 'Unban a previously banned member', inline: true },
                            { name: '/clear', value: 'Bulk delete messages', inline: true },
                            { name: '/modlogs', value: 'View moderation history', inline: true },
                            { name: '/lockdown', value: 'Lock/unlock channels', inline: true },
                            { name: '/slowmode', value: 'Set channel slowmode', inline: true }
                        );
                    break;

                case 'fun':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('🎮 Fun & Games Commands')
                        .setColor('#00ff00')
                        .setDescription('Keep your community engaged with fun activities')
                        .addFields(
                            { name: '/8ball', value: 'Ask the magic 8-ball a question', inline: true },
                            { name: '/coinflip', value: 'Flip a coin', inline: true },
                            { name: '/dice', value: 'Roll dice', inline: true },
                            { name: '/meme', value: 'Get a random meme', inline: true },
                            { name: '/joke', value: 'Get a random joke', inline: true },
                            { name: '/trivia', value: 'Start a trivia question', inline: true },
                            { name: '/poll', value: 'Create a poll', inline: true },
                            { name: '/giveaway', value: 'Start a giveaway', inline: true },
                            { name: '/rps', value: 'Play rock paper scissors', inline: true }
                        );
                    break;

                case 'utility':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('🔧 Utility Commands')
                        .setColor('#0099ff')
                        .setDescription('Helpful tools and information commands')
                        .addFields(
                            { name: '/serverinfo', value: 'Get server information', inline: true },
                            { name: '/userinfo', value: 'Get user information', inline: true },
                            { name: '/avatar', value: 'Get user avatar', inline: true },
                            { name: '/invite', value: 'Get bot invite link', inline: true },
                            { name: '/ping', value: 'Check bot latency', inline: true },
                            { name: '/uptime', value: 'Check bot uptime', inline: true },
                            { name: '/weather', value: 'Get weather information', inline: true },
                            { name: '/translate', value: 'Translate text', inline: true },
                            { name: '/remind', value: 'Set a reminder', inline: true }
                        );
                    break;

                case 'economy':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('💰 Economy Commands')
                        .setColor('#ffff00')
                        .setDescription('Server economy and reward system')
                        .addFields(
                            { name: '/balance', value: 'Check your balance', inline: true },
                            { name: '/daily', value: 'Claim daily reward', inline: true },
                            { name: '/weekly', value: 'Claim weekly reward', inline: true },
                            { name: '/pay', value: 'Pay another user', inline: true },
                            { name: '/leaderboard', value: 'View top users', inline: true },
                            { name: '/shop', value: 'Browse the server shop', inline: true },
                            { name: '/buy', value: 'Buy items from shop', inline: true },
                            { name: '/inventory', value: 'View your items', inline: true },
                            { name: '/work', value: 'Earn money by working', inline: true }
                        );
                    break;

                case 'analytics':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('📊 Analytics Commands')
                        .setColor('#ff00ff')
                        .setDescription('Server statistics and insights')
                        .addFields(
                            { name: '/stats', value: 'View server statistics', inline: true },
                            { name: '/activity', value: 'View activity charts', inline: true },
                            { name: '/topmembers', value: 'Most active members', inline: true },
                            { name: '/growth', value: 'Server growth analytics', inline: true },
                            { name: '/channels', value: 'Channel usage stats', inline: true },
                            { name: '/commands', value: 'Command usage stats', inline: true }
                        );
                    break;

                case 'config':
                    categoryEmbed = new EmbedBuilder()
                        .setTitle('⚙️ Configuration Commands')
                        .setColor('#800080')
                        .setDescription('Customize bot settings for your server')
                        .addFields(
                            { name: '/setup', value: 'Initial bot configuration', inline: true },
                            { name: '/welcome', value: 'Configure welcome messages', inline: true },
                            { name: '/goodbye', value: 'Configure goodbye messages', inline: true },
                            { name: '/autorole', value: 'Set up auto roles', inline: true },
                            { name: '/modlog', value: 'Configure moderation logs', inline: true },
                            { name: '/prefix', value: 'Change bot prefix', inline: true },
                            { name: '/leveling', value: 'Configure leveling system', inline: true },
                            { name: '/reactionroles', value: 'Set up reaction roles', inline: true },
                            { name: '/tickets', value: 'Configure ticket system', inline: true }
                        );
                    break;

                default:
                    categoryEmbed = helpEmbed;
            }

            await i.update({ embeds: [categoryEmbed] });
        });

        collector.on('end', async () => {
            const disabledRow = new ActionRowBuilder<StringSelectMenuBuilder>()
                .addComponents(selectMenu.setDisabled(true));
            
            try {
                await interaction.editReply({ components: [disabledRow] });
            } catch (error) {
                // Interaction might have been deleted
            }
        });
    },
    
    cooldown: 3
};