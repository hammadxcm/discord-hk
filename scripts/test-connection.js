const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

console.log('🔌 Testing Discord bot connection...');

client.once('ready', () => {
    console.log('✅ Bot connected successfully!');
    console.log(`🤖 Logged in as: ${client.user.tag}`);
    console.log(`📊 Bot is in ${client.guilds.cache.size} server(s)`);
    
    // Check if bot can find your specific server
    const targetGuild = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
    if (targetGuild) {
        console.log(`✅ Found your server: ${targetGuild.name}`);
        console.log(`👥 Server has ${targetGuild.memberCount} members`);
        console.log(`📁 Server has ${targetGuild.channels.cache.size} channels`);
        console.log(`🎭 Server has ${targetGuild.roles.cache.size} roles`);
        
        // Check bot permissions
        const botMember = targetGuild.members.cache.get(client.user.id);
        if (botMember) {
            const hasAdmin = botMember.permissions.has('Administrator');
            console.log(`🔐 Bot has Administrator permissions: ${hasAdmin ? '✅ YES' : '❌ NO'}`);
            
            if (!hasAdmin) {
                console.log('⚠️  Warning: Bot needs Administrator permissions for full setup');
            }
        }
    } else {
        console.log('❌ Could not find your server. Please check DISCORD_GUILD_ID');
        console.log(`🔍 Available servers:`);
        client.guilds.cache.forEach(guild => {
            console.log(`   - ${guild.name} (ID: ${guild.id})`);
        });
    }
    
    console.log('\n🎯 Connection test completed!');
    console.log('🔌 Disconnecting...');
    client.destroy();
    process.exit(0);
});

client.on('error', (error) => {
    console.error('❌ Discord client error:', error);
    process.exit(1);
});

// Test connection
client.login(process.env.DISCORD_TOKEN).catch(error => {
    console.error('❌ Failed to login to Discord:', error.message);
    
    if (error.message.includes('invalid')) {
        console.log('💡 Check your DISCORD_TOKEN in .env file');
    }
    
    process.exit(1);
});