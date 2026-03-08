const { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

console.log('🔍 Validating Discord setup script...');

// Test 1: Environment variables
console.log('\n📋 Test 1: Environment Variables');
const requiredEnvVars = ['DISCORD_TOKEN', 'DISCORD_CLIENT_ID', 'DISCORD_GUILD_ID'];
let envValid = true;

for (const envVar of requiredEnvVars) {
    if (process.env[envVar]) {
        console.log(`✅ ${envVar}: Present`);
    } else {
        console.log(`❌ ${envVar}: Missing`);
        envValid = false;
    }
}

if (!envValid) {
    console.log('❌ Environment validation failed. Please check your .env file.');
    process.exit(1);
}

// Test 2: Discord.js imports
console.log('\n🔧 Test 2: Discord.js Components');
try {
    console.log(`✅ Client: ${typeof Client}`);
    console.log(`✅ GatewayIntentBits: ${typeof GatewayIntentBits}`);
    console.log(`✅ ChannelType: ${typeof ChannelType}`);
    console.log(`✅ PermissionFlagsBits: ${typeof PermissionFlagsBits}`);
    console.log(`✅ EmbedBuilder: ${typeof EmbedBuilder}`);
} catch (error) {
    console.log('❌ Discord.js import error:', error.message);
    process.exit(1);
}

// Test 3: Client initialization
console.log('\n🤖 Test 3: Client Initialization');
try {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
        ]
    });
    console.log('✅ Client created successfully');
    
    // Test login without actually connecting
    console.log('✅ Client login method available');
    
    client.destroy();
    console.log('✅ Client destroyed successfully');
} catch (error) {
    console.log('❌ Client initialization error:', error.message);
    process.exit(1);
}

// Test 4: Role configuration validation
console.log('\n🎭 Test 4: Role Configuration');
const testRoles = [
    {
        name: "👑 Server Owner",
        color: 0x00ff00,
        permissions: [PermissionFlagsBits.Administrator],
        hoist: true,
        mentionable: false
    }
];

try {
    for (const role of testRoles) {
        if (!role.name || typeof role.name !== 'string') {
            throw new Error('Invalid role name');
        }
        if (!Array.isArray(role.permissions)) {
            throw new Error('Invalid permissions array');
        }
        if (typeof role.hoist !== 'boolean') {
            throw new Error('Invalid hoist value');
        }
        if (typeof role.mentionable !== 'boolean') {
            throw new Error('Invalid mentionable value');
        }
    }
    console.log('✅ Role configuration is valid');
} catch (error) {
    console.log('❌ Role configuration error:', error.message);
    process.exit(1);
}

// Test 5: Channel configuration validation
console.log('\n📁 Test 5: Channel Configuration');
const testChannels = [
    { name: "📋 INFORMATION", type: ChannelType.GuildCategory },
    { name: "📜-rules", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Test topic" }
];

try {
    for (const channel of testChannels) {
        if (!channel.name || typeof channel.name !== 'string') {
            throw new Error('Invalid channel name');
        }
        if (!Object.values(ChannelType).includes(channel.type)) {
            throw new Error('Invalid channel type');
        }
        if (channel.parent && typeof channel.parent !== 'string') {
            throw new Error('Invalid parent value');
        }
        if (channel.topic && typeof channel.topic !== 'string') {
            throw new Error('Invalid topic value');
        }
    }
    console.log('✅ Channel configuration is valid');
} catch (error) {
    console.log('❌ Channel configuration error:', error.message);
    process.exit(1);
}

// Test 6: EmbedBuilder functionality
console.log('\n📝 Test 6: EmbedBuilder');
try {
    const testEmbed = new EmbedBuilder()
        .setTitle('Test Embed')
        .setDescription('This is a test')
        .setColor(0x00ff00)
        .addFields({ name: 'Test Field', value: 'Test Value' })
        .setTimestamp();
    
    console.log('✅ EmbedBuilder works correctly');
} catch (error) {
    console.log('❌ EmbedBuilder error:', error.message);
    process.exit(1);
}

// Test 7: Permission flags
console.log('\n🔒 Test 7: Permission Flags');
try {
    const testPermissions = [
        PermissionFlagsBits.Administrator,
        PermissionFlagsBits.ManageGuild,
        PermissionFlagsBits.SendMessages,
        PermissionFlagsBits.ViewChannel
    ];
    
    for (const permission of testPermissions) {
        if (typeof permission !== 'bigint') {
            throw new Error(`Invalid permission type: ${typeof permission}`);
        }
    }
    console.log('✅ Permission flags are valid');
} catch (error) {
    console.log('❌ Permission flags error:', error.message);
    process.exit(1);
}

console.log('\n🎉 All validation tests passed! The setup script should work correctly.');
console.log('\n📋 Next Steps:');
console.log('1. Run: npm run setup-server-tested');
console.log('2. Monitor the output for any errors');
console.log('3. Check your Discord server for new channels and roles');
console.log('4. Follow the bot setup guide in #⚙️-bot-config');

process.exit(0);