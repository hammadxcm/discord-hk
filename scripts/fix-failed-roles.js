const { Client, GatewayIntentBits, PermissionFlagsBits, PermissionsBitField } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const FAILED_ROLES = [
    {
        name: "🤖 Bots",
        color: 0x7289da,
        permissions: [
            'SendMessages',
            'EmbedLinks',
            'AttachFiles',
            'ReadMessageHistory',
            'UseExternalEmojis',
            'AddReactions',
            'Connect',
            'Speak',
            'UseVAD'
        ],
        position: 11,
        hoist: true,
        mentionable: false
    },
    {
        name: "🎵 DJ",
        color: 0x9932cc,
        permissions: [
            'SendMessages',
            'Connect',
            'Speak',
            'UseVAD',
            'PrioritySpeaker'
        ],
        position: 8,
        hoist: false,
        mentionable: true
    },
    {
        name: "🎮 Gamer",
        color: 0x32cd32,
        permissions: [
            'SendMessages',
            'Connect',
            'Speak',
            'UseVAD'
        ],
        position: 7,
        hoist: false,
        mentionable: true
    }
];

client.once('ready', async () => {
    console.log(`🤖 Bot is ready! Logged in as ${client.user.tag}`);
    
    const guild = client.guilds.cache.first();
    if (!guild) {
        console.error('❌ No guild found! Make sure the bot is added to a server.');
        process.exit(1);
    }

    console.log(`🏰 Working on guild: ${guild.name}`);
    console.log('\n🎭 Creating failed roles...');

    for (const roleConfig of FAILED_ROLES) {
        try {
            const existingRole = guild.roles.cache.find(r => r.name === roleConfig.name);
            if (existingRole) {
                console.log(`⚠️  Role ${roleConfig.name} already exists`);
                continue;
            }

            const role = await guild.roles.create({
                name: roleConfig.name,
                color: roleConfig.color,
                permissions: roleConfig.permissions,
                hoist: roleConfig.hoist,
                mentionable: roleConfig.mentionable,
                position: roleConfig.position
            });

            console.log(`✅ Created role: ${roleConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create role ${roleConfig.name}:`, error.message);
        }
    }

    console.log('\n✅ Failed roles creation complete!');
    process.exit(0);
});

client.login(process.env.DISCORD_TOKEN);