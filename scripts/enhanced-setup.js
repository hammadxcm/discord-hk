const { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits, OverwriteType, EmbedBuilder, PermissionsBitField } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Enhanced role configuration with more roles
const ROLES = [
    {
        name: "👑 Server Owner",
        color: 0x00ff00,
        permissions: [PermissionFlagsBits.Administrator],
        position: 15,
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
        position: 14,
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
        position: 13,
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
        position: 12,
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
        position: 11,
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
        position: 10,
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
        position: 9,
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
        position: 8,
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
        position: 7,
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
        position: 6,
        hoist: false,
        mentionable: true
    },
    {
        name: "🆕 New Member",
        color: 0x95a5a6,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.UseApplicationCommands
        ],
        position: 5,
        hoist: false,
        mentionable: false
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
        position: 4,
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
        position: 3,
        hoist: false,
        mentionable: false
    },
    {
        name: "❌ Banned",
        color: 0x8B0000,
        permissions: [],
        position: 2,
        hoist: false,
        mentionable: false
    },
    {
        name: "🔍 Unverified",
        color: 0x99aab5,
        permissions: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.ReadMessageHistory
        ],
        position: 1,
        hoist: false,
        mentionable: false
    }
];

// Enhanced channel configuration with more channels
const CHANNELS = [
    // Information Category
    { name: "📋 INFORMATION", type: ChannelType.GuildCategory, position: 0 },
    { name: "📜-rules", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Server rules and guidelines - Read before participating!" },
    { name: "📢-announcements", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Important server announcements and updates" },
    { name: "🎉-welcome", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Welcome new members to the server!" },
    { name: "📊-server-stats", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Live server statistics and information" },
    { name: "🔗-useful-links", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Helpful links and resources" },
    { name: "❓-faq", type: ChannelType.GuildText, parent: "📋 INFORMATION", topic: "Frequently asked questions" },

    // General Chat Category
    { name: "💬 GENERAL CHAT", type: ChannelType.GuildCategory, position: 1 },
    { name: "💬-general", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "General discussion for all topics" },
    { name: "🎮-gaming", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Gaming discussions and coordination" },
    { name: "🎵-music-chat", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Music discussions and requests" },
    { name: "🤖-bot-commands", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Test bot commands here" },
    { name: "🗑️-spam", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "Spam and off-topic content" },
    { name: "🌙-late-night", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT", topic: "For night owls and late night chats" },

    // Gaming Category
    { name: "🎮 GAMING", type: ChannelType.GuildCategory, position: 2 },
    { name: "🎯-looking-for-group", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Find teammates and groups for games" },
    { name: "🏆-achievements", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Share your gaming achievements" },
    { name: "📺-streams", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Stream announcements and notifications" },
    { name: "🎲-game-nights", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Organize game nights and tournaments" },
    { name: "💻-pc-gaming", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "PC gaming discussions" },
    { name: "🎮-console-gaming", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Console gaming discussions" },
    { name: "📱-mobile-gaming", type: ChannelType.GuildText, parent: "🎮 GAMING", topic: "Mobile gaming discussions" },

    // Voice Channels Category
    { name: "🔊 VOICE CHANNELS", type: ChannelType.GuildCategory, position: 3 },
    { name: "🔊 Join to Create VC", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 1 },
    { name: "🎵 Music Room", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 10 },
    { name: "🎮 Gaming Lounge", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 8 },
    { name: "📞 General Voice", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 15 },
    { name: "🎭 Events Voice", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 20 },
    { name: "📚 Study Hall", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 6 },
    { name: "💼 Meeting Room", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS", userLimit: 12 },

    // Private VCs Category (for Voice Master dynamic channels)
    { name: "🔒 PRIVATE VCS", type: ChannelType.GuildCategory, position: 4 },

    // Community Category
    { name: "🎭 COMMUNITY", type: ChannelType.GuildCategory, position: 5 },
    { name: "🎨-media-sharing", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Share your artwork, photos, and media" },
    { name: "💡-suggestions", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Suggestions for improving the server" },
    { name: "🎁-giveaways", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Server giveaways and contests" },
    { name: "🎊-events", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Community events and activities" },
    { name: "📸-selfies", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Share your photos" },
    { name: "🍕-food", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Food discussions and recipes" },
    { name: "📚-book-club", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Book discussions and recommendations" },
    { name: "🎬-movies-tv", type: ChannelType.GuildText, parent: "🎭 COMMUNITY", topic: "Movies and TV show discussions" },

    // Moderation Category
    { name: "🛠️ MODERATION", type: ChannelType.GuildCategory, position: 6 },
    { name: "📝-mod-logs", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Moderation action logs" },
    { name: "🚨-reports", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "User reports and violations" },
    { name: "🎫-tickets", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Support tickets" },
    { name: "👮-staff-chat", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Staff only discussions" },
    { name: "⚙️-bot-config", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Bot configuration and testing" },
    { name: "🔍-verification", type: ChannelType.GuildText, parent: "🛠️ MODERATION", topic: "Member verification" }
];

// Bot invitation links and setup information
const RECOMMENDED_BOTS = [
    {
        name: "MEE6",
        url: "https://mee6.xyz/",
        permissions: "8", // Administrator
        description: "Leveling, moderation, and music bot",
        priority: 1,
        role: "🤖 Bots"
    },
    {
        name: "Carl-bot",
        url: "https://carl-bot.com/",
        permissions: "8",
        description: "Advanced moderation and reaction roles",
        priority: 2,
        role: "🤖 Bots"
    },
    {
        name: "Dyno",
        url: "https://dyno.gg/",
        permissions: "8",
        description: "Backup moderation and server utilities",
        priority: 3,
        role: "🤖 Bots"
    },
    {
        name: "Voice Master",
        url: "https://voicemaster.xyz/",
        permissions: "16", // Manage Channels
        description: "Dynamic voice channel creation",
        priority: 4,
        role: "🤖 Bots"
    },
    {
        name: "Jockie Music",
        url: "https://jockiemusic.com/",
        permissions: "3146752", // Voice permissions + basic
        description: "High-quality music streaming",
        priority: 5,
        role: "🤖 Bots"
    }
];

async function setupServer(guildId) {
    console.log('🚀 Starting Enhanced Discord server setup...');
    
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
    console.log('\n🎭 Creating enhanced role structure...');
    const roleMap = new Map();
    
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
                permissions: roleConfig.permissions ? PermissionsBitField.resolve(roleConfig.permissions) : [],
                hoist: roleConfig.hoist,
                mentionable: roleConfig.mentionable,
                position: roleConfig.position
            });

            roleMap.set(roleConfig.name, role.id);
            console.log(`✅ Created role: ${roleConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create role ${roleConfig.name}:`, error.message);
        }
    }

    // Create channels with enhanced features
    console.log('\n📁 Creating enhanced channel structure...');
    const channelMap = new Map();

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
                parent: parentId,
                position: channelConfig.position,
                permissionOverwrites: channelConfig.permissions
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
            console.log(`✅ Created channel: ${channelConfig.name}${channelConfig.topic ? ' - ' + channelConfig.topic : ''}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create channel ${channelConfig.name}:`, error.message);
        }
    }

    // Set up advanced permissions
    console.log('\n🔒 Setting up advanced channel permissions...');
    await setupAdvancedPermissions(guild, roleMap, channelMap);

    // Create initial content for key channels
    console.log('\n📝 Creating initial channel content...');
    await createInitialContent(guild, channelMap);

    // Generate bot invitation report
    console.log('\n🤖 Generating bot setup information...');
    await generateBotSetupInfo(guild, channelMap);

    // Create server setup summary
    await createSetupSummary(guild, channelMap, roleMap);

    console.log('\n🎉 Enhanced server setup completed successfully!');
    console.log(`📊 Created ${ROLES.length} roles and ${CHANNELS.length} channels`);
    console.log(`🤖 Ready for ${RECOMMENDED_BOTS.length} recommended bot integrations`);
}

async function setupAdvancedPermissions(guild, roleMap, channelMap) {
    const moderatorRole = guild.roles.cache.find(r => r.name === '🔨 Moderator');
    const helperRole = guild.roles.cache.find(r => r.name === '👮 Helper');
    const memberRole = guild.roles.cache.find(r => r.name === '👤 Member');
    const newMemberRole = guild.roles.cache.find(r => r.name === '🆕 New Member');
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
            }
        }
    }

    // Read-only channels
    const readOnlyChannels = ['📜-rules', '📢-announcements', '📊-server-stats'];
    for (const channelName of readOnlyChannels) {
        const channelId = channelMap.get(channelName);
        if (channelId && memberRole) {
            const channel = guild.channels.cache.get(channelId);
            if (channel) {
                await channel.permissionOverwrites.edit(everyoneRole, { SendMessages: false });
                await channel.permissionOverwrites.edit(memberRole, {
                    SendMessages: false,
                    AddReactions: true,
                    ReadMessageHistory: true
                });
                console.log(`📖 Set read-only permissions for ${channelName}`);
            }
        }
    }

    // New member restrictions
    if (newMemberRole) {
        const restrictedChannels = ['🎨-media-sharing', '🔗-useful-links'];
        for (const channelName of restrictedChannels) {
            const channelId = channelMap.get(channelName);
            if (channelId) {
                const channel = guild.channels.cache.get(channelId);
                if (channel) {
                    await channel.permissionOverwrites.edit(newMemberRole, {
                        AttachFiles: false,
                        EmbedLinks: false
                    });
                }
            }
        }
    }
}

async function createInitialContent(guild, channelMap) {
    // Create welcome message
    const welcomeChannelId = channelMap.get('🎉-welcome');
    if (welcomeChannelId) {
        const welcomeChannel = guild.channels.cache.get(welcomeChannelId);
        if (welcomeChannel) {
            const welcomeEmbed = new EmbedBuilder()
                .setTitle(`Welcome to ${guild.name}! 🎉`)
                .setDescription('Thank you for joining our community! Please read the rules and enjoy your stay.')
                .setColor('#00ff00')
                .addFields(
                    { name: '📜 First Steps', value: '1. Read #📜-rules\n2. Check #📊-server-stats\n3. Introduce yourself!' },
                    { name: '🤖 Bot Commands', value: 'Use #🤖-bot-commands to test bot features' },
                    { name: '❓ Need Help?', value: 'Check #❓-faq or create a ticket in #🎫-tickets' }
                )
                .setTimestamp();
            
            await welcomeChannel.send({ embeds: [welcomeEmbed] });
            console.log('✅ Created welcome message');
        }
    }

    // Create initial rules message
    const rulesChannelId = channelMap.get('📜-rules');
    if (rulesChannelId) {
        const rulesChannel = guild.channels.cache.get(rulesChannelId);
        if (rulesChannel) {
            const rulesEmbed = new EmbedBuilder()
                .setTitle('📜 Server Rules')
                .setDescription('Please read and follow these rules to maintain a positive community environment.')
                .setColor('#ff0000')
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
            console.log('✅ Created initial rules message');
        }
    }
}

async function generateBotSetupInfo(guild, channelMap) {
    const botConfigChannelId = channelMap.get('⚙️-bot-config');
    if (botConfigChannelId) {
        const botConfigChannel = guild.channels.cache.get(botConfigChannelId);
        if (botConfigChannel) {
            const setupEmbed = new EmbedBuilder()
                .setTitle('🤖 Recommended Bot Setup')
                .setDescription('Here are the recommended bots to add to your server:')
                .setColor('#7289da');

            for (const bot of RECOMMENDED_BOTS) {
                const inviteUrl = `${bot.url}`;
                setupEmbed.addFields({
                    name: `${bot.priority}. ${bot.name}`,
                    value: `${bot.description}\n[Invite ${bot.name}](${inviteUrl})\nAssign role: ${bot.role}`,
                    inline: false
                });
            }

            setupEmbed.addFields({
                name: '📝 Setup Instructions',
                value: '1. Click the invite links above\n2. Authorize with recommended permissions\n3. Assign the 🤖 Bots role to each bot\n4. Configure each bot according to the documentation'
            });

            await botConfigChannel.send({ embeds: [setupEmbed] });
            console.log('✅ Created bot setup information');
        }
    }
}

async function createSetupSummary(guild, channelMap, roleMap) {
    const serverStatsChannelId = channelMap.get('📊-server-stats');
    if (serverStatsChannelId) {
        const serverStatsChannel = guild.channels.cache.get(serverStatsChannelId);
        if (serverStatsChannel) {
            const summaryEmbed = new EmbedBuilder()
                .setTitle(`📊 ${guild.name} Server Statistics`)
                .setDescription('Your server has been successfully configured!')
                .setColor('#00ff00')
                .addFields(
                    { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
                    { name: '📁 Channels', value: `${guild.channels.cache.size}`, inline: true },
                    { name: '🎭 Roles', value: `${guild.roles.cache.size}`, inline: true },
                    { name: '✅ Setup Complete', value: `✅ ${ROLES.length} roles created\n✅ ${CHANNELS.length} channels created\n✅ Permissions configured\n✅ Initial content added` }
                )
                .setTimestamp()
                .setFooter({ text: 'Server setup completed successfully!' });

            await serverStatsChannel.send({ embeds: [summaryEmbed] });
            console.log('✅ Created setup summary');
        }
    }
}

client.once('ready', async () => {
    console.log(`✅ Enhanced bot logged in as ${client.user.tag}!`);
    
    const guildId = process.env.DISCORD_GUILD_ID;
    if (!guildId) {
        console.error('❌ DISCORD_GUILD_ID not found in environment variables');
        process.exit(1);
    }

    try {
        await setupServer(guildId);
    } catch (error) {
        console.error('❌ Enhanced setup failed:', error);
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