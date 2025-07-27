import { Schema, model, Document } from 'mongoose';

export interface IGuild extends Document {
    guildId: string;
    name: string;
    icon?: string;
    ownerId: string;
    
    // Bot Configuration
    prefix: string;
    locale: string;
    
    // Moderation Settings
    moderation: {
        enabled: boolean;
        muteRole?: string;
        logChannel?: string;
        autoModEnabled: boolean;
        maxWarnings: number;
        warningDuration: number; // hours
    };
    
    // Leveling Settings
    leveling: {
        enabled: boolean;
        xpPerMessage: number;
        xpCooldown: number; // seconds
        levelUpChannel?: string;
        levelUpMessage: string;
        roleRewards: Array<{
            level: number;
            roleId: string;
        }>;
    };
    
    // Economy Settings
    economy: {
        enabled: boolean;
        dailyAmount: number;
        weeklyAmount: number;
        currency: string;
        currencySymbol: string;
    };
    
    // Welcome/Goodbye Settings
    welcome: {
        enabled: boolean;
        channel?: string;
        message: string;
        embed: boolean;
        autoRole?: string;
        dmWelcome: boolean;
        dmMessage?: string;
    };
    
    goodbye: {
        enabled: boolean;
        channel?: string;
        message: string;
        embed: boolean;
    };
    
    // Logging Settings
    logging: {
        enabled: boolean;
        channel?: string;
        events: string[]; // messageDelete, messageEdit, memberJoin, etc.
    };
    
    // Auto Role Settings
    autoRole: {
        enabled: boolean;
        roles: string[];
        delay: number; // seconds
    };
    
    // Reaction Roles (custom)
    reactionRoles: Array<{
        messageId: string;
        channelId: string;
        roles: Array<{
            emoji: string;
            roleId: string;
        }>;
    }>;
    
    // Custom Commands
    customCommands: Array<{
        name: string;
        description: string;
        response: string;
        embedResponse: boolean;
        permissions: string[];
        cooldown: number;
        enabled: boolean;
    }>;
    
    // Ticket System
    tickets: {
        enabled: boolean;
        category?: string;
        supportRole?: string;
        transcriptChannel?: string;
        autoClose: number; // hours of inactivity
    };
    
    // Analytics
    analytics: {
        enabled: boolean;
        messageCount: number;
        commandCount: number;
        memberJoins: number;
        memberLeaves: number;
    };
    
    // Premium Features
    premium: {
        active: boolean;
        tier: number;
        expiresAt?: Date;
    };
    
    createdAt: Date;
    updatedAt: Date;
}

const guildSchema = new Schema<IGuild>({
    guildId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    icon: { type: String },
    ownerId: { type: String, required: true },
    
    prefix: { type: String, default: '!' },
    locale: { type: String, default: 'en' },
    
    moderation: {
        enabled: { type: Boolean, default: true },
        muteRole: { type: String },
        logChannel: { type: String },
        autoModEnabled: { type: Boolean, default: false },
        maxWarnings: { type: Number, default: 3 },
        warningDuration: { type: Number, default: 24 }
    },
    
    leveling: {
        enabled: { type: Boolean, default: true },
        xpPerMessage: { type: Number, default: 20 },
        xpCooldown: { type: Number, default: 60 },
        levelUpChannel: { type: String },
        levelUpMessage: { 
            type: String, 
            default: 'Congratulations {user}! You reached level {level}!' 
        },
        roleRewards: [{
            level: Number,
            roleId: String
        }]
    },
    
    economy: {
        enabled: { type: Boolean, default: true },
        dailyAmount: { type: Number, default: 100 },
        weeklyAmount: { type: Number, default: 1000 },
        currency: { type: String, default: 'coins' },
        currencySymbol: { type: String, default: '💰' }
    },
    
    welcome: {
        enabled: { type: Boolean, default: false },
        channel: { type: String },
        message: { 
            type: String, 
            default: 'Welcome {user} to {server}!' 
        },
        embed: { type: Boolean, default: true },
        autoRole: { type: String },
        dmWelcome: { type: Boolean, default: false },
        dmMessage: { type: String }
    },
    
    goodbye: {
        enabled: { type: Boolean, default: false },
        channel: { type: String },
        message: { 
            type: String, 
            default: 'Goodbye {user}, thanks for being part of {server}!' 
        },
        embed: { type: Boolean, default: true }
    },
    
    logging: {
        enabled: { type: Boolean, default: false },
        channel: { type: String },
        events: [{ type: String }]
    },
    
    autoRole: {
        enabled: { type: Boolean, default: false },
        roles: [{ type: String }],
        delay: { type: Number, default: 0 }
    },
    
    reactionRoles: [{
        messageId: String,
        channelId: String,
        roles: [{
            emoji: String,
            roleId: String
        }]
    }],
    
    customCommands: [{
        name: String,
        description: String,
        response: String,
        embedResponse: { type: Boolean, default: false },
        permissions: [String],
        cooldown: { type: Number, default: 0 },
        enabled: { type: Boolean, default: true }
    }],
    
    tickets: {
        enabled: { type: Boolean, default: false },
        category: { type: String },
        supportRole: { type: String },
        transcriptChannel: { type: String },
        autoClose: { type: Number, default: 24 }
    },
    
    analytics: {
        enabled: { type: Boolean, default: true },
        messageCount: { type: Number, default: 0 },
        commandCount: { type: Number, default: 0 },
        memberJoins: { type: Number, default: 0 },
        memberLeaves: { type: Number, default: 0 }
    },
    
    premium: {
        active: { type: Boolean, default: false },
        tier: { type: Number, default: 0 },
        expiresAt: { type: Date }
    }
}, {
    timestamps: true
});

// Indexes
guildSchema.index({ guildId: 1 });

export const Guild = model<IGuild>('Guild', guildSchema);