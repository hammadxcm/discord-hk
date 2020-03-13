# Discord Bot Integration Guide

This comprehensive guide covers setting up the best Discord bots for your server, including step-by-step configuration for each bot.

## 🏆 Tier 1 Essential Bots

### 1. MEE6 - Core Leveling & Moderation

#### ⚡ Quick Setup
1. **Invite**: Visit https://mee6.xyz/ → Add to Server
2. **Permissions**: Ensure admin permissions for full functionality
3. **Dashboard**: Access at https://mee6.xyz/dashboard

#### 📊 Leveling System Configuration
```yaml
XP Settings:
  XP per message: 15-25 (recommended: 20)
  XP cooldown: 60 seconds
  Level up channel: #level-ups or #general
  Level up message: "GG {user}, you just advanced to level {level}!"

Role Rewards:
  Level 5: @Active Member
  Level 10: @Regular
  Level 15: @Veteran + Image Permissions
  Level 20: @Elite + Voice Priority
  Level 25: @Legend + VIP Channel Access
  Level 30: @Champion + Custom Color Role
```

#### 🛡️ Moderation Setup
```yaml
Auto-Moderation:
  - Bad words filter: ON
  - Repeated text (3+ times): 5 second timeout
  - Too many caps (70%+): Delete message
  - Too many mentions (5+): Delete message
  - Spam detection: ON
  - Raid protection: ON

Punishments:
  1st violation: Warning
  2nd violation: 5 minute timeout
  3rd violation: 1 hour timeout
  4th violation: 24 hour timeout
  5th violation: Kick
```

#### 🎵 Music Bot Setup
```yaml
Music Settings:
  DJ Role: @DJ
  Music Channel: #music
  Max queue length: 50
  Max song duration: 10 minutes
  Volume limit: 100%
```

### 2. Carl-bot - Advanced Automation

#### ⚡ Quick Setup
1. **Invite**: https://carl-bot.com/ → Invite Carl-bot
2. **Dashboard**: https://carl-bot.com/dashboard

#### 🎭 Reaction Roles Setup
```yaml
Message Setup:
  Channel: #roles
  Title: "Choose Your Roles!"
  
Reaction Role Categories:
  🎮 Gaming Roles:
    🔥 Valorant
    ⚡ Apex Legends  
    🎯 CS:GO
    🏆 League of Legends
    
  🎨 Interest Roles:
    🎵 Music Lover
    🎬 Movie Buff
    📚 Book Worm
    🍳 Cooking
    
  🔔 Notification Roles:
    📢 Announcements
    🎁 Giveaways
    🎊 Events
    📺 Stream Alerts
```

#### 🤖 Automod Configuration
```yaml
Automod Rules:
  - Links: Delete unauthorized links
  - Invites: Delete Discord invites (except partnerships)
  - Excessive emojis: Delete messages with 5+ emojis
  - Mass mentions: Delete messages with 4+ mentions
  - Zalgo text: Delete messages with zalgo/fancy text
  - Repeated characters: Delete messages with 10+ repeated chars

Whitelist:
  - Staff roles bypass all automod
  - Trusted members bypass link filter
  - Partner channels allow invites
```

#### ⭐ Starboard Setup
```yaml
Starboard Config:
  Channel: #starboard
  Emoji: ⭐
  Required reactions: 3
  Self-star: Disabled
  Minimum message length: 10 characters
```

### 3. Dyno - Backup Moderation & Utilities

#### ⚡ Quick Setup
1. **Invite**: https://dyno.gg/ → Add to Server
2. **Dashboard**: https://dyno.gg/dashboard

#### 🔧 Key Configurations
```yaml
Auto Role:
  Role: @Member
  Delay: 10 minutes (prevents raid accounts)
  
Auto Moderation:
  - Anti-spam: ON
  - Anti-raid: ON  
  - Mass mention: 4+ mentions
  - Repeated text: 5+ repetitions
  
Moderation:
  - Auto delete: Bot commands after 5 seconds
  - Mod log channel: #mod-logs
  - Mute role: @Muted
```

#### 📊 Server Stats
```yaml
Voice Channels (Server Stats):
  📊 Total Members: {membercount}
  👤 Online Members: {onlinecount}  
  🤖 Total Bots: {botcount}
  💎 Boost Level: {boostlevel}
  🎉 Server Birthday: Created {createdate}
```

## 🎵 Music Bots

### Jockie Music (Recommended)

#### ⚡ Setup
1. **Invite*