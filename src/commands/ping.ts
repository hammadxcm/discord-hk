import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot\'s latency and API response time'),
    
    async execute(interaction: ChatInputCommandInteraction) {
        const sent = await interaction.reply({ 
            content: 'Pinging...', 
            fetchReply: true,
            ephemeral: true
        });
        
        const latency = sent.createdTimestamp - interaction.createdTimestamp;
        const apiLatency = Math.round(interaction.client.ws.ping);
        
        const pingEmbed = new EmbedBuilder()
            .setTitle('🏓 Pong!')
            .setColor('#00ff00')
            .addFields(
                { name: 'Bot Latency', value: `${latency}ms`, inline: true },
                { name: 'API Latency', value: `${apiLatency}ms`, inline: true },
                { name: 'Status', value: apiLatency < 100 ? '🟢 Excellent' : apiLatency < 300 ? '🟡 Good' : '🔴 Poor', inline: true }
            )
            .setTimestamp()
            .setFooter({ text: 'Discord HK Bot', iconURL: interaction.client.user?.displayAvatarURL() });
        
        await interaction.editReply({ 
            content: '', 
            embeds: [pingEmbed] 
        });
    },
    
    cooldown: 5
};