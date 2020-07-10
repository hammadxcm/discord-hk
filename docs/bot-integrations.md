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
1. **Invite**: https://jockiemusic.com/
2. **Permissions**: Connect, Speak, Use Voice Activity
3. **Commands**: `j!help` for command list

#### 🎵 Configuration
```yaml
Settings:
  Prefix: j!
  DJ Role: @DJ
  Music Channel: #music-commands
  Volume: 50% default
  
Features:
  - YouTube, Spotify, SoundCloud support
  - Queue management
  - Lyrics display
  - 24/7 mode for VIP servers
```

### Alternative: Hydra Bot

#### ⚡ Setup
1. **Invite**: https://hydrabot.co/
2. **Premium**: Consider for enhanced features

## 🎁 Giveaway Bots

### GiveawayBot

#### ⚡ Setup
1. **Invite**: https://giveawaybot.party/
2. **Channel**: Create #giveaways

#### 🎁 Giveaway Commands
```bash
# Basic giveaway
g!gstart #channel 1d 1w Discord Nitro

# Advanced giveaway  
g!gstart #giveaways 7d 3w Premium Role
--requirement role:@Active Member
--requirement messages:50
--requirement age:7d
```

#### 🎉 Configuration
```yaml
Settings:
  Manager Role: @Giveaway Manager
  Giveaway Channel: #giveaways
  Ping Role: @Giveaway Notifications
  
Templates:
  Weekly Nitro: 7d duration, @Active Member requirement
  Monthly Boost: 30d duration, Level 15+ requirement
  Special Events: Custom requirements
```

## 🎫 Ticket System

### TicketTool

#### ⚡ Setup
1. **Invite**: https://tickettool.xyz/
2. **Configuration**: Create ticket categories

#### 🎫 Ticket Categories
```yaml
Categories:
  🛠️ General Support:
    - Staff role: @Helper
    - Auto-message: "Thanks for opening a ticket! Please describe your issue."
    
  🎮 Gaming Help:
    - Staff role: @Gaming Staff
    - Auto-message: "What game do you need help with?"
    
  💎 VIP Support: 
    - Staff role: @Admin
    - Requirement: @VIP role
    
  🚨 Report Player:
    - Staff role: @Moderator
    - Auto-message: "Please provide evidence and details."
```

## 📊 Statistics & Analytics

### Statbot

#### ⚡ Setup
1. **Invite**: https://statbot.net/
2. **Voice Channel Stats**: Create voice channels for live stats

#### 📈 Stat Channels
```yaml
Voice Channels:
  📊 Members: {members}
  👥 Online: {online}
  🤖 Bots: {bots}
  💎 Boosters: {boosters}
  🎵 In Voice: {voice}
```

### ServerStats

#### 📊 Advanced Analytics
```yaml
Features:
  - Daily/weekly/monthly reports
  - Member growth tracking
  - Message activity heatmaps
  - Voice channel usage stats
  - Bot command usage analytics
```

## 🎮 Gaming Integration & Leaderboards

### Steam Bot - Steam Integration

#### ⚡ Setup
1. **Invite**: https://steambot.me/
2. **Features**: Steam profiles, game tracking, achievement monitoring
3. **Commands**:
   ```bash
   s!profile <steam_id>    # View Steam profile
   s!games <user>          # Show game library
   s!compare <user1> <user2> # Compare profiles
   s!recent <user>         # Recent activity
   ```

#### 🏆 Steam Leaderboards
```yaml
Configuration:
  - Link Steam accounts: s!link <steam_id>
  - Track playtime across games
  - Achievement competitions
  - Game completion races
  
Leaderboard Types:
  - Most hours played overall
  - Game-specific playtime
  - Achievement hunters
  - Recent activity leaders
```

### GameStats Bot - Multi-Platform Gaming

#### 🎮 Setup
1. **Invite**: https://gamestats.gg/
2. **Supported Platforms**:
   ```yaml
   Gaming Platforms:
     - Steam (profiles, achievements, playtime)
     - Epic Games (account linking)
     - Origin/EA (game tracking)
     - Ubisoft Connect (achievements)
     - Battle.net (Overwatch, WoW, etc.)
   
   Specific Games:
     - Valorant (rank tracking, match history)
     - League of Legends (profiles, match data)
     - CS:GO (statistics, rank tracking)
     - Apex Legends (stats, rank tracking)
     - Fortnite (profiles, match stats)
     - Rocket League (rank, match data)
     - Overwatch (competitive stats)
     - Call of Duty (Warzone, MW2, etc.)
   ```

#### 📊 Leaderboard Features
```yaml
Auto-Generated Leaderboards:
  - Competitive rankings per game
  - K/D ratios and win rates
  - Hours played comparisons
  - Achievement counts
  - Recent performance trends

Custom Competitions:
  - Weekly tournaments
  - Monthly challenges
  - Seasonal rankings
  - Cross-game competitions
```

### Riot Games Integration - LoL & Valorant

#### ⚡ Setup
1. **Bot**: Riot Account Bot
2. **Invite**: Search "Riot Games" in Discord bot lists
3. **Features**:
   ```yaml
   League of Legends:
     - Rank tracking and updates
     - Match history analysis
     - Champion mastery tracking
     - Pro scene updates
     - Tournament notifications
   
   Valorant:
     - Competitive rank tracking
     - Agent statistics
     - Match performance analysis
     - Map win rates
     - Team formation tools
   ```

### Steam Wishlist Tracker

#### 💰 Setup
1. **Bot**: Steam Deals Bot
2. **Features**:
   ```yaml
   Wishlist Monitoring:
     - Track Steam sale prices
     - Notify when games go on sale
     - Price history tracking
     - Community wishlists
     - Group buying coordination
   
   Commands:
     - !wishlist add <game>
     - !deals current
     - !price <game_name>
     - !sales notify @role
   ```

### Stream Notifications - Enhanced

#### 📺 StreamLabs Bot
```yaml
Setup:
  1. Invite StreamLabs bot
  2. Connect Twitch/YouTube/Facebook Gaming
  3. Configure notification channel: #stream-alerts
  4. Set up roles: @Streamer, @Stream Notifications

Advanced Features:
  - Multi-platform support
  - Custom embed messages
  - Thumbnail previews
  - Stream categories
  - Viewer count tracking
  - Automatic role assignment
```

#### 🎥 NotSoBot - Multi-Platform Alerts
```yaml
Platform Support:
  - Twitch streams
  - YouTube