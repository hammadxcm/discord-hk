# 🤖 Discord Server Automation Guide

This guide shows you how to automatically set up your Discord server with channels, roles, and permissions using our automation scripts.

## 🚀 Quick Setup

### 1. **Prerequisites**
```bash
# Make sure you have your bot token and guild ID in .env
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_guild_id_here
```

### 2. **Run the Setup Script**
```bash
# Option 1: JavaScript version
npm run setup-server

# Option 2: TypeScript version  
npm run setup-server-ts
```

### 3. **What Gets Created**
The script will automatically create:
- ✅ **10 Roles** with proper hierarchy and permissions
- ✅ **32 Channels** organized in 6 categories
- ✅ **Proper permissions** for staff and member channels
- ✅ **Read-only channels** for rules and announcements

## 🎭 Roles Created

### **Role Hierarchy (Top to Bottom):**
```yaml
👑 Server Owner (Green)
  - Administrator permissions
  - Position: 10

🛡️ Administrator (Red) 
  - Full server management
  - Position: 9

🔨 Moderator (Blue)
  - Kick, ban, manage messages
  - Position: 8

👮 Helper (Cyan)
  - Manage messages, timeout members
  - Position: 7

🎖️ VIP (Gold)
  - Enhanced permissions
  - Position: 6

⭐ Nitro Booster (Pink)
  - Special booster perks
  - Position: 5

🎵 DJ (Purple)
  - Music bot permissions
  - Position: 4

🎮 Gamer (Green)
  - Gaming-focused role
  - Position: 3

👤 Member (Discord Blue)
  - Basic member permissions
  - Position: 2

🔇 Muted (Gray)
  - Restricted permissions
  - Position: 1
```

## 📁 Channel Structure Created

### **📋 INFORMATION Category**
- `📜-rules` (Read-only for members)
- `📢-announcements` (Read-only for members)
- `🎉-welcome`
- `📊-server-stats`
- `🔗-useful-links`

### **💬 GENERAL CHAT Category**
- `💬-general`
- `🎮-gaming`
- `🎵-music-chat`
- `🤖-bot-commands`
- `🗑️-spam`

### **🎮 GAMING Category**
- `🎯-looking-for-group`
- `🏆-achievements`
- `📺-streams`

### **🔊 VOICE CHANNELS Category**
- `🎵 Music Room`
- `🎮 Gaming Lounge`
- `📞 General Voice`
- `🔒 Private Room 1`
- `🔒 Private Room 2`

### **🎭 COMMUNITY Category**
- `🎨-media-sharing`
- `💡-suggestions`
- `🎁-giveaways`
- `🎊-events`

### **🛠️ MODERATION Category** (Staff Only)
- `📝-mod-logs` (Staff only)
- `🚨-reports` (Staff only)
- `🎫-tickets`
- `👮-staff-chat` (Staff only)

## 🔒 Permissions Setup

### **Staff Channels (Moderator+ Only):