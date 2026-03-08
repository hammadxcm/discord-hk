import { Client, GatewayIntentBits, ChannelType, PermissionFlagsBits, OverwriteType } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

interface ChannelConfig {
    name: string;
    type: ChannelType;
    parent?: string;
    position?: number;
    permissions?: Array<{
        id: string;
        type: OverwriteType;
        allow?: bigint[];
        deny?: bigint[];
    }>;
}

interface RoleConfig {
    name: string;
    color: number;
    permissions: bigint[];
    position?: number;
    hoist?: boolean;
    mentionable?: boolean;
}

const ROLES: RoleConfig[] = [
    {
        name: "Server Owner",
        color: 0x00ff00,
        permissions: [PermissionFlagsBits.Administrator],
        position: 10,
        hoist: true,
        mentionable: false
    },
    {
        name: "Administrator",
        color: 0xff0000,
        permissions: [
            PermissionFlagsBits.ManageGuild,
            PermissionFlagsBits.ManageChannels,
            PermissionFlagsBits.ManageRoles,
            PermissionFlagsBits.KickMembers,
            PermissionFlagsBits.BanMembers,
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ViewAuditLog
        ],
        position: 9,
        hoist: true,
        mentionable: true
    },
    {
        name: "Moderator",
        color: 0x0099ff,
        permissions: [
            PermissionFlagsBits.KickMembers,
            PermissionFlagsBits.BanMembers,
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ModerateMembers,
            PermissionFlagsBits.ViewAuditLog
        ],
        position: 8,
        hoist: true,
        mentionable: true
    },
    {
        name: "Helper",
        color: 0x00ffff,
        permissions: [
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ModerateMembers
        ],
        position: 7,
        hoist: true,
        mentionable: true
    },
    {
        name: "VIP",
        color: 0xffd700,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.UseExternalEmojis,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak
        ],
        position: 6,
        hoist: true,
        mentionable: true
    },
    {
        name: "Nitro Booster",
        color: 0xff73fa,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles,
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.UseExternalEmojis
        ],
        position: 5,
        hoist: true,
        mentionable: true
    },
    {
        name: "DJ",
        color: 0x9932cc,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.UseVoiceActivity
        ],
        position: 4,
        hoist: false,
        mentionable: true
    },
    {
        name: "Gamer",
        color: 0x32cd32,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak
        ],
        position: 3,
        hoist: false,
        mentionable: true
    },
    {
        name: "Member",
        color: 0x7289da,
        permissions: [
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.Connect,
            PermissionFlagsBits.Speak,
            PermissionFlagsBits.ReadMessageHistory,
            PermissionFlagsBits.AddReactions,
            PermissionFlagsBits.UseApplicationCommands
        ],
        position: 2,
        hoist: false,
        mentionable: false
    },
    {
        name: "Muted",
        color: 0x808080,
        permissions: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.ReadMessageHistory
        ],
        position: 1,
        hoist: false,
        mentionable: false
    }
];

const CHANNELS: ChannelConfig[] = [
    // Information Category
    { name: "📋 INFORMATION", type: ChannelType.GuildCategory, position: 0 },
    { name: "📜-rules", type: ChannelType.GuildText, parent: "📋 INFORMATION" },
    { name: "📢-announcements", type: ChannelType.GuildText, parent: "📋 INFORMATION" },
    { name: "🎉-welcome", type: ChannelType.GuildText, parent: "📋 INFORMATION" },
    { name: "📊-server-stats", type: ChannelType.GuildText, parent: "📋 INFORMATION" },
    { name: "🔗-useful-links", type: ChannelType.GuildText, parent: "📋 INFORMATION" },

    // General Chat Category
    { name: "💬 GENERAL CHAT", type: ChannelType.GuildCategory, position: 1 },
    { name: "💬-general", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT" },
    { name: "🎮-gaming", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT" },
    { name: "🎵-music-chat", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT" },
    { name: "🤖-bot-commands", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT" },
    { name: "🗑️-spam", type: ChannelType.GuildText, parent: "💬 GENERAL CHAT" },

    // Gaming Category
    { name: "🎮 GAMING", type: ChannelType.GuildCategory, position: 2 },
    { name: "🎯-looking-for-group", type: ChannelType.GuildText, parent: "🎮 GAMING" },
    { name: "🏆-achievements", type: ChannelType.GuildText, parent: "🎮 GAMING" },
    { name: "📺-streams", type: ChannelType.GuildText, parent: "🎮 GAMING" },

    // Voice Channels Category
    { name: "🔊 VOICE CHANNELS", type: ChannelType.GuildCategory, position: 3 },
    { name: "🎵 Music Room", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS" },
    { name: "🎮 Gaming Lounge", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS" },
    { name: "📞 General Voice", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS" },
    { name: "🔒 Private Room 1", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS" },
    { name: "🔒 Private Room 2", type: ChannelType.GuildVoice, parent: "🔊 VOICE CHANNELS" },

    // Community Category
    { name: "🎭 COMMUNITY", type: ChannelType.GuildCategory, position: 4 },
    { name: "🎨-media-sharing", type: ChannelType.GuildText, parent: "🎭 COMMUNITY" },
    { name: "💡-suggestions", type: ChannelType.GuildText, parent: "🎭 COMMUNITY" },
    { name: "🎁-giveaways", type: ChannelType.GuildText, parent: "🎭 COMMUNITY" },
    { name: "🎊-events", type: ChannelType.GuildText, parent: "🎭 COMMUNITY" },

    // Moderation Category
    { name: "🛠️ MODERATION", type: ChannelType.GuildCategory, position: 5 },
    { name: "📝-mod-logs", type: ChannelType.GuildText, parent: "🛠️ MODERATION" },
    { name: "🚨-reports", type: ChannelType.GuildText, parent: "🛠️ MODERATION" },
    { name: "🎫-tickets", type: ChannelType.GuildText, parent: "🛠️ MODERATION" },
    { name: "👮-staff-chat", type: ChannelType.GuildText, parent: "🛠️ MODERATION" }
];

async function setupServer(guildId: string): Promise<void> {
    console.log('🚀 Starting Discord server setup...');
    
    const guild = client.guilds.cache.get(guildId);
    if (!guild) {
        console.error('❌ Guild not found!');
        return;
    }

    console.log(`📋 Setting up server: ${guild.name}`);

    // Create roles first
    console.log('🎭 Creating roles...');
    const roleMap = new Map<string, string>();
    
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
                mentionable: roleConfig.mentionable,
                position: roleConfig.position
            });

            roleMap.set(roleConfig.name, role.id);
            console.log(`✅ Created role: ${roleConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create role ${roleConfig.name}:`, error);
        }
    }

    // Create channels
    console.log('📁 Creating channels...');
    const channelMap = new Map<string, string>();

    for (const channelConfig of CHANNELS) {
        try {
            const existingChannel = guild.channels.cache.find(c => c.name === channelConfig.name);
            if (existingChannel) {
                console.log(`⚠️  Channel ${channelConfig.name} already exists`);
                channelMap.set(channelConfig.name, existingChannel.id);
                continue;
            }

            const parentId = channelConfig.parent ? channelMap.get(channelConfig.parent) : undefined;

            const channel = await guild.channels.create({
                name: channelConfig.name,
                type: channelConfig.type,
                parent: parentId,
                position: channelConfig.position,
                permissionOverwrites: channelConfig.permissions
            });

            channelMap.set(channelConfig.name, channel.id);
            console.log(`✅ Created channel: ${channelConfig.name}`);
            
            // Add delay to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`❌ Failed to create channel ${channelConfig.name}:`, error);
        }
    }

    // Set up special permissions for moderation channels
    console.log('🔒 Setting up channel permissions...');
    
    const moderatorRole = guild.roles.cache.find(r => r.name === 'Moderator');
    const helperRole = guild.roles.cache.find(r => r.name === 'Helper');
    const memberRole = guild.roles.cache.find(r => r.name === 'Member');
    const everyoneRole = guild.roles.everyone;

    if (moderatorRole && memberRole) {
        // Moderation channels - staff only
        const modChannels = ['📝-mod-logs', '🚨-reports', '👮-staff-chat'];
        for (const channelName of modChannels) {
            const channelId = channelMap.get(channelName);
            if (channelId) {
                const channel = guild.channels.cache.get(channelId);
                if (channel && channel.isTextBased()) {
                    await channel.permissionOverwrites.create(everyoneRole, {
                        ViewChannel: false
                    });
                    await channel.permissionOverwrites.create(moderatorRole, {
                        ViewChannel: true,
                        SendMessages: true,
                        ReadMessageHistory: true
                    });
                    if (helperRole) {
                        await channel.permissionOverwrites.create(helperRole, {
                            ViewChannel: true,
                            SendMessages: true,
                            ReadMessageHistory: true
                        });
                    }
                    console.log(`🔒 Set permissions for ${channelName}`);
                }
            }
        }

        // Rules channel - read only for members
        const rulesChannelId = channelMap.get('📜-rules');
        if (rulesChannelId) {
            const rulesChannel = guild.channels.cache.get(rulesChannelId);
            if (rulesChannel && rulesChannel.isTextBased()) {
                await rulesChannel.permissionOverwrites.create(memberRole, {
                    SendMessages: false,
                    AddReactions: true,
                    ReadMessageHistory: true
                });
                console.log('🔒 Set read-only permissions for rules channel');
            }
        }

        // Announcements channel - read only for members
        const announcementsChannelId = channelMap.get('📢-announcements');
        if (announcementsChannelId) {
            const announcementsChannel = guild.channels.cache.get(announcementsChannelId);
            if (announcementsChannel && announcementsChannel.isTextBased()) {
                await announcementsChannel.permissionOverwrites.create(memberRole, {
                    SendMessages: false,
                    AddReactions: true,
                    ReadMessageHistory: true
                });
                console.log('🔒 Set read-only permissions for announcements channel');
            }
        }
    }

    console.log('🎉 Server setup completed successfully!');
    console.log(`📊 Created ${ROLES.length} roles and ${CHANNELS.length} channels`);
}

client.once('ready', async () => {
    console.log(`✅ Bot logged in as ${client.user?.tag}!`);
    
    const guildId = process.env.DISCORD_GUILD_ID;
    if (!guildId) {
        console.error('❌ DISCORD_GUILD_ID not found in environment variables');
        process.exit(1);
    }

    try {
        await setupServer(guildId);
    } catch (error) {
        console.error('❌ Setup failed:', error);
    } finally {
        console.log('🔌 Disconnecting...');
        client.destroy();
        process.exit(0);
    }
});

client.login(process.env.DISCORD_TOKEN);