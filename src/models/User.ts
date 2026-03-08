import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    userId: string;
    guildId: string;
    username: string;
    discriminator: string;
    avatar?: string;
    
    // Economy System
    balance: number;
    bank: number;
    lastDaily: Date;
    lastWeekly: Date;
    
    // Leveling System (custom, separate from MEE6)
    customXp: number;
    customLevel: number;
    messageCount: number;
    voiceMinutes: number;
    
    // Moderation History
    warnings: Array<{
        id: string;
        reason: string;
        moderator: string;
        date: Date;
        active: boolean;
    }>;
    
    mutes: Array<{
        id: string;
        reason: string;
        moderator: string;
        duration: number;
        date: Date;
        active: boolean;
    }>;
    
    kicks: Array<{
        id: string;
        reason: string;
        moderator: string;
        date: Date;
    }>;
    
    bans: Array<{
        id: string;
        reason: string;
        moderator: string;
        duration?: number;
        date: Date;
        active: boolean;
    }>;
    
    // Activity Tracking
    lastMessage: Date;
    lastVoiceJoin: Date;
    totalMessages: number;
    totalVoiceTime: number;
    
    // User Preferences
    timezone: string;
    birthday?: Date;
    profileColor?: string;
    customTitle?: string;
    
    // Analytics
    commandsUsed: number;
    joinDate: Date;
    invitedBy?: string;
    
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    username: { type: String, required: true },
    discriminator: { type: String, required: true },
    avatar: { type: String },
    
    // Economy
    balance: { type: Number, default: 0 },
    bank: { type: Number, default: 0 },
    lastDaily: { type: Date },
    lastWeekly: { type: Date },
    
    // Custom Leveling
    customXp: { type: Number, default: 0 },
    customLevel: { type: Number, default: 0 },
    messageCount: { type: Number, default: 0 },
    voiceMinutes: { type: Number, default: 0 },
    
    // Moderation
    warnings: [{
        id: String,
        reason: String,
        moderator: String,
        date: { type: Date, default: Date.now },
        active: { type: Boolean, default: true }
    }],
    
    mutes: [{
        id: String,
        reason: String,
        moderator: String,
        duration: Number,
        date: { type: Date, default: Date.now },
        active: { type: Boolean, default: true }
    }],
    
    kicks: [{
        id: String,
        reason: String,
        moderator: String,
        date: { type: Date, default: Date.now }
    }],
    
    bans: [{
        id: String,
        reason: String,
        moderator: String,
        duration: Number,
        date: { type: Date, default: Date.now },
        active: { type: Boolean, default: true }
    }],
    
    // Activity
    lastMessage: { type: Date },
    lastVoiceJoin: { type: Date },
    totalMessages: { type: Number, default: 0 },
    totalVoiceTime: { type: Number, default: 0 },
    
    // Preferences
    timezone: { type: String, default: 'UTC' },
    birthday: { type: Date },
    profileColor: { type: String, default: '#7289DA' },
    customTitle: { type: String },
    
    // Analytics
    commandsUsed: { type: Number, default: 0 },
    joinDate: { type: Date, default: Date.now },
    invitedBy: { type: String }
}, {
    timestamps: true
});

// Indexes for better performance
userSchema.index({ userId: 1, guildId: 1 }, { unique: true });
userSchema.index({ customLevel: -1 });
userSchema.index({ balance: -1 });
userSchema.index({ totalMessages: -1 });

export const User = model<IUser>('User', userSchema);