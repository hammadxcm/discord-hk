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
  - YouTube uploads/streams
  - Twitter posts
  - Instagram posts
  - TikTok uploads
  - Reddit posts

Configuration:
  !stream add twitch <username>
  !youtube add <channel_id>
  !twitter add <username>
```

## 🎉 Fun & Entertainment Bots

### Dank Memer - Memes & Economy

#### 💰 Economy & Fun
```yaml
Features:
  - Virtual economy system
  - Meme commands and image generation
  - Mini-games (slots, blackjack, trivia)
  - Currency system with trading
  - Daily/weekly rewards
  - Robbery and heist systems

Commands:
  pls meme          # Random meme
  pls balance       # Check money
  pls daily         # Daily rewards
  pls slots         # Casino games
  pls rob @user     # Rob other users
```

### Mudae - Anime & Waifu Game

#### 🎌 Setup
1. **Invite**: https://mudae.net/
2. **Features**:
   ```yaml
   Anime Game Features:
     - Collect anime/manga characters
     - Waifu/husbando claiming system
     - Trading and marketplace
     - Kakera currency system
     - Custom lists and wishlists
   
   Commands:
     $wa / $ha        # Roll for characters
     $mm / $ma        # Claim characters
     $ls              # List collection
     $trade @user     # Trade with others
   ```

### Pokémon Bot - Pokémon Catching

#### ⚡ Setup
1. **Bot**: Pokétwo
2. **Invite**: https://poketwo.net/
3. **Features**:
   ```yaml
   Pokémon Features:
     - Catch wild Pokémon
     - Build your collection
     - Pokémon battles
     - Trading system
     - Shiny hunting
   
   Commands:
     p!catch <name>   # Catch Pokémon
     p!info latest    # View caught Pokémon
     p!battle @user   # Battle others
     p!market         # Trading market
   ```

### Truth or Dare Bot

#### 🎲 Setup
1. **Bot**: Truth or Dare Bot
2. **Features**:
   ```yaml
   Party Games:
     - Truth or dare questions
     - Never have I ever
     - Would you rather
     - Custom question sets
     - Age-appropriate filters
   
   Commands:
     !truth           # Truth question
     !dare            # Dare challenge
     !nhie            # Never have I ever
     !wyr             # Would you rather
   ```

### Counting Bot - Community Counting

#### 🔢 Setup
1. **Bot**: Counting Bot
2. **Features**:
   ```yaml
   Counting Game:
     - Community counting challenge
     - Personal counting stats
     - Server leaderboards
     - Mistake tracking
     - Achievement system
   
   Setup:
     c!setup #counting-channel
     c!settings reactions true
   ```

### Akinator Bot - Guessing Game

#### 🔮 Setup
1. **Bot**: Akinator
2. **Features**:
   ```yaml
   Guessing Game:
     - Think of a character
     - Answer yes/no questions
     - AI tries to guess your character
     - Multiplayer modes
     - Character database
   
   Commands:
     !akinator start
     !aki yes/no/idk
   ```

### Trivia Bot - Quiz Games

#### 🧠 Setup
1. **Bot**: TriviaBot
2. **Features**:
   ```yaml
   Quiz Features:
     - Multiple categories
     - Difficulty levels
     - Multiplayer trivia
     - Leaderboards
     - Custom question sets
   
   Commands:
     !trivia          # Start trivia
     !trivia science  # Category-specific
     !leaderboard     # View top scores
   ```

### UNO Bot - Card Game

#### 🃏 Setup
1. **Bot**: UNO Bot
2. **Features**:
   ```yaml
   UNO Game:
     - Multiplayer UNO games
     - Private game rooms
     - Tournament modes
     - Statistics tracking
     - Custom rule sets
   
   Commands:
     uno start        # Start new game
     uno join         # Join existing game
     uno play <card>  # Play a card
   ```

### Social Credit Bot - Reputation System

#### ⭐ Setup
1. **Bot**: Rep Bot
2. **Features**:
   ```yaml
   Reputation System:
     - Give/receive reputation points
     - Reputation leaderboards
     - Cooldown periods
     - Reputation reasons
     - Server-wide tracking
   
   Commands:
     +rep @user <reason>  # Give reputation
     rep @user            # Check reputation
     toprep               # Leaderboard
   ```

### Birthday Bot - Enhanced Celebrations

#### 🎂 Birthday Celebrations
```yaml
Advanced Setup:
  Channel: #birthdays
  Role: @Birthday Star (24-hour role)
  Message: "🎉 Happy Birthday {user}! 🎂"
  Timezone: Server default
  
Features:
  - Automatic birthday detection
  - Custom birthday messages
  - Birthday reminders
  - Age calculation
  - Birthday calendar
  - Gift giving system

Commands:
  !birthday set MM/DD     # Set birthday
  !birthday list          # Upcoming birthdays
  !birthday today         # Today's birthdays
```

### Mimu Bot - Virtual Pet

#### 🐾 Setup
1. **Bot**: Mimu
2. **Features**:
   ```yaml
   Virtual Pet System:
     - Adopt and care for pets
     - Feed and play with pets
     - Pet battles and competitions
     - Breeding system
     - Pet accessories and items
   
   Commands:
     m!adopt          # Adopt a pet
     m!feed           # Feed your pet
     m!play           # Play with pet
     m!battle @user   # Pet battles
   ```

### Miki Bot - Social Features

#### 💝 Setup
1. **Bot**: Miki
2. **Features**:
   ```yaml
   Social Features:
     - Relationship system
     - Marriage and dating
     - Experience and leveling
     - Achievement system
     - Daily activities
   
   Commands:
     >daily           # Daily rewards
     >marry @user     # Propose marriage
     >divorce @user   # End marriage
     >profile         # View profile
   ```

## 🔧 Utility & Productivity Bots

### YAGPDB (Yet Another General Purpose Discord Bot)

#### ⚡ Advanced Features
```yaml
Custom Commands:
  - Complex scripting
  - Database integration
  - Web dashboard
  - Advanced automod
  - Custom APIs
```

### Apollo Bot - Productivity Suite

#### 📋 Setup
1. **Invite**: https://apollo-bot.xyz/
2. **Features**:
   ```yaml
   Productivity Tools:
     - Task management system
     - Project collaboration
     - Meeting scheduler
     - Deadline reminders
     - Progress tracking
   
   Commands:
     /task create <description>
     /project new <name>
     /remind <time> <message>
     /schedule <event>
   ```

### GitHub Bot - Development Integration

#### 💻 Setup
1. **Invite**: GitHub Bot (official)
2. **Features**:
   ```yaml
   Repository Integration:
     - Commit notifications
     - Pull request updates
     - Issue tracking
     - Release announcements
     - Code review notifications
   
   Configuration:
     /github subscribe <repo> issues
     /github subscribe <repo> commits
     /github subscribe <repo> releases
   ```

### Reminder Bot - Advanced Scheduling

#### ⏰ Setup
1. **Invite**: https://reminderbot.xyz/
2. **Features**:
   ```yaml
   Reminder Types:
     - Personal reminders
     - Server-wide announcements
     - Recurring events
     - Birthday reminders
     - Deadline tracking
   
   Commands:
     r!remind 1h Take a break
     r!remind @everyone tomorrow Event starts
     r!remind recurring daily 9am Daily standup
   ```

### Translator Bot - Multi-Language Support

#### 🌍 Setup
1. **Bot**: Translate Bot
2. **Features**:
   ```yaml
   Translation Features:
     - Auto-detect language
     - 100+ languages supported
     - Reaction-based translation
     - Channel auto-translation
     - Language learning tools
   
   Commands:
     !translate <text>
     !translate <from> <to> <text>
     !react-translate #channel
   ```

### Poll Bot - Advanced Polling

#### 📊 Setup
1. **Bot**: Simple Poll Bot
2. **Features**:
   ```yaml
   Poll Types:
     - Multiple choice polls
     - Yes/No questions
     - Anonymous voting
     - Time-limited polls
     - Results analytics
   
   Commands:
     /poll create "Question?" "Option1" "Option2"
     /poll anonymous "Anonymous poll?"
     /poll timed 1h "Quick decision?"
   ```

### Ticket Bot - Support System

#### 🎫 Setup
1. **Bot**: Ticket Bot (enhanced)
2. **Features**:
   ```yaml
   Ticket Features:
     - Category-based tickets
     - Auto-assignment
     - Ticket transcripts
     - Rating system
     - Queue management
   
   Setup:
     !ticket setup
     !ticket category <name>
     !ticket role <@role>
   ```

### Webhook Manager - Enhanced Integration

#### 🔗 Cross-Platform Integration
```yaml
Social Media:
  - Twitter posts → #social-feed
  - Instagram posts → #media-share
  - YouTube uploads → #videos
  - TikTok content → #entertainment

Development:
  - GitHub commits → #dev-updates
  - GitLab merges → #development
  - Docker builds → #deployments
  - CI/CD pipelines → #automation

Business:
  - Google Calendar → #events
  - Trello updates → #project-mgmt
  - Slack integration → #cross-chat
  - Email notifications → #alerts
```

### Weather Bot - Location Services

#### 🌤️ Setup
1. **Bot**: Weather Bot
2. **Features**:
   ```yaml
   Weather Services:
     - Current conditions
     - 7-day forecasts
     - Severe weather alerts
     - Location-based updates
     - Air quality index
   
   Commands:
     !weather <location>
     !forecast <location>
     !alerts <location>
     !weather set <default_location>
   ```

### Time Zone Bot - Global Coordination

#### 🕐 Setup
1. **Bot**: Time Zone Bot
2. **Features**:
   ```yaml
   Time Management:
     - Time zone conversions
     - Meeting scheduler
     - World clock display
     - Event time coordination
     - Auto-timezone detection
   
   Commands:
     !time <timezone>
     !convert <time> <from> <to>
     !schedule <time> <timezone>
   ```

## 🛡️ Security & Verification

### Wick Bot

#### 🔒 Advanced Security
```yaml
Features:
  - Anti-nuke protection
  - Advanced raid detection
  - Account age verification
  - Mass ban protection
  - Backup system integration
```

### Captcha Bot

#### ✅ Verification System
```yaml
Setup:
  1. Create #verification channel
  2. Set unverified role: @Unverified
  3. Configure captcha difficulty
  4. Set timeout duration: 10 minutes
```

## 📱 Mobile-Optimized Bots

### Mobile-Friendly Features
```yaml
Considerations:
  - Short command names
  - Clear button interfaces  
  - Minimal text walls
  - Voice-friendly commands
  - Touch-friendly reactions
```

## 🔄 Bot Management Best Practices

### Permission Management
```yaml
Bot Hierarchy:
  1. Security bots (Wick) - Highest
  2. Moderation bots (MEE6, Carl-bot)
  3. Utility bots (Dyno, YAGPDB)
  4. Entertainment bots (Dank Memer, Music)
  5. Specialty bots (Lowest)
```

### Performance Monitoring
```yaml
Regular Checks:
  - Bot response times
  - Command success rates
  - Error log reviews
  - Permission audits
  - Feature usage analytics
```

### Backup Strategies
```yaml
Redundancy:
  - Multiple moderation bots
  - Backup music bots
  - Alternative welcome systems
  - Manual override procedures
```

## 🚀 Advanced Integration Tips

### Cross-Bot Synergy
```yaml
Examples:
  - MEE6 levels → Carl-bot reaction roles
  - Dyno auto-role → Verification system
  - Music bot DJ role → Leveling rewards
  - Giveaway requirements → Activity tracking
```

### Custom Bot Development
For features not covered by existing bots, consider developing a custom bot using the TypeScript framework in this repository.

## ⚙️ Enhanced Configuration Templates

### Small Server (< 100 members)
```yaml
Essential Bots (5-8 bots):
  Core:
    - MEE6 (leveling + basic moderation)
    - Carl-bot (reaction roles + automod)
    - Jockie Music (music streaming)
    - GiveawayBot (community engagement)
  
  Optional:
    - Dank Memer (fun + economy)
    - Steam Bot (gaming integration)
    - Reminder Bot (scheduling)
    - Weather Bot (utility)
```

### Medium Server (100-1000 members)  
```yaml
Recommended Bots (10-15 bots):
  Core Moderation:
    - MEE6 + Carl-bot + Dyno
    - Wick Bot (security)
    - TicketTool (support)
  
  Entertainment:
    - Music bot + Dank Memer
    - Pokétwo or Mudae (games)
    - Trivia Bot (engagement)
    - UNO Bot (multiplayer fun)
  
  Utility:
    - GitHub Bot (development)
    - Translator Bot (international)
    - Poll Bot (decisions)
    - Time Zone Bot (coordination)
  
  Gaming:
    - Steam Bot + GameStats
    - Riot Games integration
    - Stream notifications
```

### Large Server (1000+ members)
```yaml
Full Setup (15-25 bots):
  Advanced Moderation:
    - MEE6 + Carl-bot + Dyno (triple redundancy)
    - Wick Bot + Anti-raid systems
    - Multiple ticket systems
    - Advanced logging
  
  Entertainment Suite:
    - Multiple music bots
    - Gaming bots (Pokétwo, Mudae, UNO)
    - Social bots (Mimu, Miki, Rep system)
    - Trivia + Truth or Dare
  
  Productivity:
    - GitHub + Apollo Bot
    - Advanced reminder systems
    - Multi-language support
    - Cross-platform integrations
  
  Gaming Ecosystem:
    - Steam + multiple game integrations
    - Leaderboard systems
    - Tournament organization
    - Stream management
  
  Analytics & Monitoring:
    - Custom bot integration
    - Advanced statistics
    - Performance monitoring
    - Community insights
```

## 📊 Complete Bot Categories Summary

### 🛡️ **Moderation & Security (Essential)**
1. **MEE6** - Primary leveling and basic moderation
2. **Carl-bot** - Advanced automod and reaction roles  
3. **Dyno** - Backup moderation and server stats
4. **Wick Bot** - Advanced security and anti-nuke
5. **Captcha Bot** - Verification system

### 🎮 **Gaming & Leaderboards (High Value)**
6. **Steam Bot** - Steam integration and leaderboards
7. **GameStats Bot** - Multi-platform gaming statistics
8. **Riot Games Bot** - LoL/Valorant integration
9. **Steam Deals Bot** - Wishlist and price tracking

### 🎵 **Music & Entertainment (Popular)**
10. **Jockie Music** - High-quality music streaming
11. **Dank Memer** - Memes and economy system
12. **Pokétwo** - Pokémon catching game
13. **Mudae** - Anime character collection
14. **UNO Bot** - Card games
15. **Trivia Bot** - Quiz competitions
16. **Akinator** - Guessing game
17. **Truth or Dare Bot** - Party games

### 🔧 **Utility & Productivity (Helpful)**
18. **GitHub Bot** - Development integration
19. **Reminder Bot** - Advanced scheduling
20. **Translator Bot** - Multi-language support
21. **Poll Bot** - Advanced polling system
22. **Weather Bot** - Location services
23. **Time Zone Bot** - Global coordination
24. **Apollo Bot** - Productivity suite

### 🎁 **Community & Social (Engagement)**
25. **GiveawayBot** - Giveaway management
26. **TicketTool** - Support system
27. **Birthday Bot** - Birthday celebrations
28. **Rep Bot** - Reputation system
29. **Mimu Bot** - Virtual pets
30. **Miki Bot** - Social features
31. **Counting Bot** - Community counting

### 📺 **Integration & Notifications (Modern)**
32. **StreamLabs Bot** - Multi-platform streams
33. **NotSoBot** - Social media alerts
34. **Webhook Manager** - Cross-platform integration

## 🎯 **Recommended Bot Combinations**

### **Gaming-Focused Server**
```yaml
Priority Bots:
  - MEE6 + Carl-bot (moderation)
  - Steam Bot + GameStats (gaming stats)
  - Jockie Music (background music)
  - Pokétwo or Mudae (entertainment)
  - Stream notifications (content)
  - Tournament/leaderboard bots
```

### **Social & Community Server**
```yaml
Priority Bots:
  - MEE6 + Carl-bot (community management)
  - Dank Memer (economy fun)
  - Birthday Bot (celebrations)
  - Rep Bot (social credit)
  - Translator Bot (inclusivity)
  - Event and giveaway bots
```

### **Developer/Tech Server**
```yaml
Priority Bots:
  - MEE6 + Carl-bot (organization)
  - GitHub Bot (development)
  - Apollo Bot (productivity)
  - Reminder Bot (deadlines)
  - Time Zone Bot (global teams)
  - Technical utility bots
```

### **International/Global Server**
```yaml
Priority Bots:
  - MEE6 + Carl-bot (management)
  - Translator Bot (communication)
  - Time Zone Bot (coordination)
  - Weather Bot (local info)
  - Multi-language entertainment bots
  - Cultural celebration bots
```

## 🎤 **Voice Channel Management Bots**

### Voice Master - Dynamic Voice Channels

#### 🔊 Setup
1. **Invite**: https://voicemaster.xyz/
2. **Features**:
   ```yaml
   Dynamic VCs:
     - Auto-create voice channels when users join
     - Customizable channel names
     - Auto-delete when empty
     - User permissions control
     - Channel limits and settings
   
   Commands:
     vm!setup                    # Initial setup
     vm!create <name>           # Create VC template
     vm!limit <number>          # Set user limit
     vm!name <new_name>         # Rename your VC
     vm!lock                    # Lock your VC
     vm!unlock                  # Unlock your VC
     vm!kick @user              # Kick from your VC
     vm!ban @user               # Ban from your VC
   ```

#### 📝 Configuration
```yaml
Setup Process:
  1. Run vm!setup in your server
  2. Create a "Join to Create" channel
  3. Users join this channel to auto-create their own VC
  4. Channels auto-delete when empty
  
Custom Settings:
  - Default channel names: "{user}'s Channel"
  - Auto-delete timer: Instant when empty
  - User limit: 10 (customizable per channel)
  - Permissions: Channel owner has full control
```

### Auto Voice Channels - Alternative Option

#### 🎵 Setup
1. **Invite**: Search "Auto Voice Channels" in Discord bot lists
2. **Features**:
   ```yaml
   Features:
     - Create temporary voice channels
     - Auto-naming with custom templates
     - Channel categories for organization
     - Bitrate and user limit controls
     - Permission inheritance
   
   Templates:
     - "{user}'s Room"
     - "🎮 {user}'s Gaming"
     - "🎵 {user}'s Music Room"
     - "📞 {user}'s Chat"
   ```

### Craig Bot - Voice Recording

#### 📹 Setup
1. **Invite**: https://craig.chat/
2. **Features**:
   ```yaml
   Recording Features:
     - Multi-track voice recording
     - Individual user tracks
     - High-quality audio
     - Automatic processing
     - Download links
   
   Commands:
