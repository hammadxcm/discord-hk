const { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Tested and working role configuration
const ROLES = [
    {
        name: "👑 Server Owner",
        color: 0x00ff00,
        permissions: [PermissionFlagsBits.Administrator],
        hoist: true,
        mentionable: false
    },
    {
        name: "🛡️ Administrator",
        color: 0xff0000,
        permissions: [
            PermissionFlagsBits.ManageGuild,
            PermissionFlagsBits.ManageChannels,
            PermissionFlagsBits.ManageRoles,
            PermissionFlagsBits.KickMembers,
            PermissionFlagsBits.BanMembers,
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ViewAuditLog,
            PermissionFlagsBits.ManageWebhooks,
            PermissionFlagsBits.ManageEmojisAndStickers
        ],
        hoist: true,
        mentionable: true
    },
    {
        name: "🔨 Moderator",
        color: 0x0099ff,
        permissions: [
            PermissionFlagsBits.KickMembers,
            PermissionFlagsBits.BanMembers,
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ModerateMembers,
            PermissionFlagsBits.ViewAuditLog,
            PermissionFlagsBits.ManageNicknames
        ],
        hoist: true,
        mentionable: true
    },
    {
        name: "👮 Helper",
        color: 0x00ffff,
        permissions: [
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ModerateMembers,
            PermissionFlagsBits.ManageNicknames
        ],
        hoist: true,
        mentionable: true
    },
    {
        name: "🤖 Bots",
        color: 0x7289da,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.UseExternalEmojis,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.UseVoiceActivity
        ],
        hoist: true,
        mentionable: false
    },
    {
        name: "🎖️ VIP",
        color: 0xffd700,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.UseExternalEmojis,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.PrioritySpeaker,
            PermissionFlagsBits.ChangeNickname
        ],
        hoist: true,
        mentionable: true
    },
    {
        name: "⭐ Nitro Booster",
        color: 0xff73fa,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.UseExternalEmojis,
            PermissionFlagsBits.ChangeNickname
        ],
        hoist: true,
        mentionable: true
    },
    {
        name: "🎵 DJ",
        color: 0x9932cc,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.UseVoiceActivity,
            PermissionFlagsBits.PrioritySpeaker
        ],
        hoist: false,
        mentionable: true
    },
    {
        name: "🎮 Gamer",
        color: 0x32cd32,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.UseVoiceActivity
        ],
        hoist: false,
        mentionable: true
    },
    {
        name: "🌟 Active Member",
        color: 0xffa500,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks
        ],
        hoist: false,
        mentionable: true
    },
    {
        name: "👤 Member",
        color: 0x7289da,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.UseApplicationCommands,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks
        ],
        hoist: false,
        mentionable: false
    },
    {
        name: "🔇 Muted",
        color: 0x808080,
        permissions: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.ReadMessageHistory
        ],
        hoist: false,
        mentionable: false
    }
];

// Tested and working channel configuration
const CHANNELS = [
    // Information Category
    { name: "📋 INFORMATION", type: ChannelType.GuildCategory },
    { name: "📜-rules", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Server rules and guidelines - Read before participating!" },
    { name: "📢-announcements", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Important server announcements and updates" },
    { name: "🎉-welcome", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Welcome new members to the server!" },
    { name: "📊-server-stats", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Live server statistics and information" },
    { name: "🔗-useful-links", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Helpful links and resources" },

    // General Chat Category
    { name: "💬 GENERAL CHAT", type: ChannelType.GuildCategory },
    { name: "💬-general", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "General discussion for all topics" },
    { name: "🎮-gaming", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Gaming discussions and coordination" },
    { name: "🎵-music-chat", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Music discussions and requests" },
    { name: "🤖-bot-commands", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Test bot commands here" },
    { name: "🗑️-spam", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Spam and off-topic content" },

    // Gaming Category
    { name: "🎮 GAMING", type: ChannelType.GuildCategory },
    { name: "🎯-looking-for-group", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Find teammates and groups for games" },
    { name: "🏆-achievements", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Share your gaming achievements" },
    { name: "📺-streams", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Stream announcements and notifications" },

    // Voice Channels Category
    { name: "🔊 VOICE CHANNELS", type: ChannelType.GuildCategory },
    { name: "🔊 Join to Create VC", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 1 },
    { name: "🎵 Music Room", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 10 },
    { name: "🎮 Gaming Lounge", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 8 },
    { name: "📞 General Voice", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 15 },
    { name: "🎭 Events Voice", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 20 },

    // Private VCs Category (for Voice Master dynamic channels)
    { name: "🔒 PRIVATE VCS", type: ChannelType.GuildCategory },

    // Community Category
    { name: "🎭 COMMUNITY", type: ChannelType.GuildCategory },
    { name: "🎨-media-sharing", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Share your artwork, photos, and media" },
    { name: "💡-suggestions", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Suggestions for improving the server" },
    { name: "🎁-giveaways", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Server giveaways and contests" },
    { name: "🎊-events", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Community events and activities" },

    // Moderation Category
    { name: "🛠️ MODERATION", type: ChannelType.GuildCategory },
    { name: "📝-mod-logs", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Moderation action logs" },
    { name: "🚨-reports", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "User reports and violations" },
    { name: "🎫-tickets", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Support tickets" },
    { name: "👮-staff-chat", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Staff only discussions" },
    { name: "⚙️-bot-config", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Bot configuration and testing" }
];

// Bot invitation information
const RECOMMENDED_BOTS = [
    {
        name: "MEE6",
        url: "https://mee6.xyz/",
        description: "Leveling, moderation, and music bot",
        priority: 1
    },
    {
        name: "Carl-bot",
        url: "https://carl-bot.com/",
        description: "Advanced moderation and reaction roles",
        priority: 2
    },
    {
        name: "Dyno",
        url: "https://dyno.gg/",
        description: "Backup moderation and server utilities",
        priority: 3
    },
    {
        name: "Voice Master",
        url: "https://voicemaster.xyz/",
        description: "Dynamic voice channel creation",
        priority: 4
    },
    {
        name: "Jockie Music",
        url: "https://jockiemusic.com/",
        description: "High-quality music streaming",
        priority: 5
    }
];

async function setupServer(guildId) {
    console.log('🚀 Starting tested Discord server setup...');
    
    const guild = client.guilds.cache.get(guildId);
    if (!guild) {
        console.error('❌ Guild not found!');
        return;
    }

    console.log(`📋 Setting up server: ${guild.name}`);
    console.log(`👥 Current members: ${guild.memberCount}`);
    console.log(`📁 Current channels: ${guild.channels.cache.size}`);
    console.log(`🎭 Current roles: ${guild.roles.cache.size}`);

    // Create roles first
    console.log('\n🎭 Creating role structure...');
    const roleMap = new Map();
    let roleCount = 0;
    
    for (const roleConfig of ROLES) {
        try {
            const existingRole = guild.roles.cache.find(r => r.name === roleConfig.name);
            if (existingRole) {
                console.log(`⚠️  Role ${roleConfig.name} already exists`);
                roleMap.set(roleConfig.name, existingRole.id);
                continue;
            }

            const role = await guild.roles.create({
                name: roleConfig.name,
                color: roleConfig.color,
                permissions: roleConfig.permissions,
                hoist: roleConfig.hoist,
                mentionable: roleConfig.mentionable
            });

            roleMap.set(roleConfig.name, role.id);
            roleCount++;
            console.log(`✅ Created role: ${roleConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create role ${roleConfig.name}:`, error.message);
        }
    }

    // Create channels
    console.log('\n📁 Creating channel structure...');
    const channelMap = new Map();
    let channelCount = 0;

    for (const channelConfig of CHANNELS) {
        try {
            const existingChannel = guild.channels.cache.find(c => c.name === channelConfig.name);
            if (existingChannel) {
                console.log(`⚠️  Channel ${channelConfig.name} already exists`);
                channelMap.set(channelConfig.name, existingChannel.id);
                continue;
            }

            const parentId = channelConfig.parent ? channelMap.get(channelConfig.parent) : undefined;

            const channelOptions = {
                name: channelConfig.name,
                type: channelConfig.type,
                parent: parentId
            };

            // Add topic for text channels
            if (channelConfig.topic && channelConfig.type === ChannelType.GuildText) {
                channelOptions.topic = channelConfig.topic;
            }

            // Add user limit for voice channels
            if (channelConfig.userLimit && channelConfig.type === ChannelType.GuildVoice) {
                channelOptions.userLimit = channelConfig.userLimit;
            }

            const channel = await guild.channels.create(channelOptions);

            channelMap.set(channelConfig.name, channel.id);
            channelCount++;
            console.log(`✅ Created channel: ${channelConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create channel ${channelConfig.name}:`, error.message);
        }
    }

    // Set up permissions
    console.log('\n🔒 Setting up channel permissions...');
    await setupPermissions(guild, roleMap, channelMap);

    // Create initial content
    console.log('\n📝 Creating initial content...');
    await createInitialContent(guild, channelMap);

    // Generate bot setup info
    console.log('\n🤖 Creating bot setup guide...');
    await generateBotInfo(guild, channelMap);

    console.log('\n🎉 Server setup completed successfully!');
    console.log(`📊 Created ${roleCount} new roles and ${channelCount} new channels`);
    console.log(`🤖 Bot setup guide created in #⚙️-bot-config`);
    console.log(`📋 Check #📊-server-stats for summary`);
}

async function setupPermissions(guild, roleMap, channelMap) {
    try {
        const moderatorRole = guild.roles.cache.find(r => r.name === '🔨 Moderator');
        const helperRole = guild.roles.cache.find(r => r.name === '👮 Helper');
        const memberRole = guild.roles.cache.find(r => r.name === '👤 Member');
        const everyoneRole = guild.roles.everyone;

        // Staff-only channels
        const staffChannels = ['📝-mod-logs', '🚨-reports', '👮-staff-chat', '⚙️-bot-config'];
        for (const channelName of staffChannels) {
            const channelId = channelMap.get(channelName);
            if (channelId && moderatorRole) {
                const channel = guild.channels.cache.get(channelId);
                if (channel) {
                    await channel.permissionOverwrites.edit(everyoneRole, { ViewChannel: false });
                    await channel.permissionOverwrites.edit(moderatorRole, {
                        ViewChannel: true,
                        SendMessages: true,
                        ReadMessageHistory: true
                    });
                    if (helperRole) {
                        await channel.permissionOverwrites.edit(helperRole, {
                            ViewChannel: true,
                            SendMessages: true,
                            ReadMessageHistory: true
                        });
                    }
                    console.log(`🔒 Set staff permissions for ${channelName}`);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        }

        // Read-only channels
        const readOnlyChannels = ['📜-rules', '📢-announcements', '📊-server-stats'];
        for (const channelName of readOnlyChannels) {
            const channelId = channelMap.get(channelName);
            if (channelId) {
                const channel = guild.channels.cache.get(channelId);
                if (channel) {
                    await channel.permissionOverwrites.edit(everyoneRole, { 
                        SendMessages: false,
                        AddReactions: true,
                        ReadMessageHistory: true 
                    });
                    console.log(`📖 Set read-only permissions for ${channelName}`);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }
        }
    } catch (error) {
        console.error('❌ Error setting up permissions:', error.message);
    }
}

async function createInitialContent(guild, channelMap) {
    try {
        // Create welcome message
        const welcomeChannelId = channelMap.get('🎉-welcome');
        if (welcomeChannelId) {
            const welcomeChannel = guild.channels.cache.get(welcomeChannelId);
            if (welcomeChannel) {
                const welcomeEmbed = new EmbedBuilder()
                    .setTitle(`Welcome to ${guild.name}! 🎉`)
                    .setDescription('Thank you for joining our community! Please read the rules and enjoy your stay.')
                    .setColor(0x00ff00)
                    .addFields(
                        { name: '📜 First Steps', value: '1. Read <#' + channelMap.get('📜-rules') + '>\n2. Check <#' + channelMap.get('📊-server-stats') + '>\n3. Introduce yourself!' },
                        { name: '🤖 Bot Commands', value: 'Use <#' + channelMap.get('🤖-bot-commands') + '> to test bot features' }
                    )
                    .setTimestamp();
                
                await welcomeChannel.send({ embeds: [welcomeEmbed] });
                console.log('✅ Created welcome message');
            }
        }

        // Create rules message
        const rulesChannelId = channelMap.get('📜-rules');
        if (rulesChannelId) {
            const rulesChannel = guild.channels.cache.get(rulesChannelId);
            if (rulesChannel) {
                const rulesEmbed = new EmbedBuilder()
                    .setTitle('📜 Server Rules')
                    .setDescription('Please read and follow these rules to maintain a positive community environment.')
                    .setColor(0xff0000)
                    .addFields(
                        { name: '1️⃣ Be Respectful', value: 'Treat all members with kindness and respect' },
                        { name: '2️⃣ No Spam', value: 'Avoid repetitive messages or flooding channels' },
                        { name: '3️⃣ Use Appropriate Channels', value: 'Keep discussions in relevant channels' },
                        { name: '4️⃣ No NSFW Content', value: 'Keep all content family-friendly' },
                        { name: '5️⃣ Follow Discord ToS', value: 'Adhere to Discord\'s Terms of Service' }
                    )
                    .setFooter({ text: 'React with ✅ to acknowledge you\'ve read the rules' });
                
                const message = await rulesChannel.send({ embeds: [rulesEmbed] });
                await message.react('✅');
                console.log('✅ Created rules message');
            }
        }

        // Create server stats
        const statsChannelId = channelMap.get('📊-server-stats');
        if (statsChannelId) {
            const statsChannel = guild.channels.cache.get(statsChannelId);
            if (statsChannel) {
                const statsEmbed = new EmbedBuilder()
                    .setTitle(`📊 ${guild.name} Statistics`)
                    .setDescription('Server setup completed successfully!')
                    .setColor(0x00ff00)
                    .addFields(
                        { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
                        { name: '📁 Channels', value: `${guild.channels.cache.size}`, inline: true },
                        { name: '🎭 Roles', value: `${guild.roles.cache.size}`, inline: true }
                    )
                    .setTimestamp();

                await statsChannel.send({ embeds: [statsEmbed] });
                console.log('✅ Created server statistics');
            }
        }
    } catch (error) {
        console.error('❌ Error creating initial content:', error.message);
    }
}

async function generateBotInfo(guild, channelMap) {
    try {
        const botConfigChannelId = channelMap.get('⚙️-bot-config');
        if (botConfigChannelId) {
            const botConfigChannel = guild.channels.cache.get(botConfigChannelId);
            if (botConfigChannel) {
                const setupEmbed = new EmbedBuilder()
                    .setTitle('🤖 Recommended Bot Setup')
                    .setDescription('Here are the recommended bots to add to your server:')
                    .setColor(0x7289da);

                for (const bot of RECOMMENDED_BOTS) {
                    setupEmbed.addFields({
                        name: `${bot.priority}. ${bot.name}`,
                        value: `${bot.description}\n[Invite ${bot.name}](${bot.url})\nAssign the 🤖 Bots role after inviting`,
                        inline: false
                    });
                }

                setupEmbed.addFields({
                    name: '📝 Setup Instructions',
                    value: '1. Click the invite links above\n2. Authorize with Administrator permissions\n3. Assign the 🤖 Bots role to each bot\n4. Configure each bot using the documentation'
                });

                await botConfigChannel.send({ embeds: [setupEmbed] });
                console.log('✅ Created bot setup guide');
            }
        }
    } catch (error) {
        console.error('❌ Error creating bot setup info:', error.message);
    }
}

client.once('ready', async () => {
    console.log(`✅ Tested bot logged in as ${client.user.tag}!`);
    
    const guildId = process.env.DISCORD_GUILD_ID;
    if (!guildId) {
        console.error('❌ DISCORD_GUILD_ID not found in environment variables');
        process.exit(1);
    }

    try {
        await setupServer(guildId);
    } catch (error) {
        console.error('❌ Setup failed:', error);
        console.error('Stack trace:', error.stack);
    } finally {
        console.log('🔌 Disconnecting...');
        client.destroy();
        process.exit(0);
    }
});

client.on('error', (error) => {
    console.error('❌ Discord client error:', error);
});

client.login(process.env.DISCORD_TOKEN).catch(error => {
    console.error('❌ Failed to login:', error.message);
    process.exit(1);
});