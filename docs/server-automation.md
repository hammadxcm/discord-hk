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

### **Staff Channels (Moderator+ Only):**
- `📝-mod-logs`
- `🚨-reports`
- `👮-staff-chat`

### **Read-Only Channels:**
- `📜-rules` (Members can read/react only)
- `📢-announcements` (Members can read/react only)

### **Role Permissions:**
- **Server Owner**: Administrator
- **Administrator**: Full management except owner transfer
- **Moderator**: Kick, ban, manage messages, view audit log
- **Helper**: Manage messages, timeout members
- **VIP**: Enhanced chat and voice permissions
- **Member**: Standard Discord permissions
- **Muted**: View and read only

## 🛠️ Customization

### **Modify Roles:**
Edit `scripts/setup-server.js` and change the `ROLES` array:

```javascript
{
    name: "Your Custom Role",
    color: 0xff0000,  // Hex color
    permissions: [PermissionFlagsBits.SendMessages],
    position: 5,
    hoist: true,      // Show separately in member list
    mentionable: true // Can be mentioned by @role
}
```

### **Modify Channels:**
Edit the `CHANNELS` array:

```javascript
{
    name: "your-channel-name",
    type: ChannelType.GuildText,     // or GuildVoice, GuildCategory
    parent: "CATEGORY NAME",         // Category to put channel in
    position: 1                      // Order within category
}
```

### **Add Custom Permissions:**
```javascript
// In channel config, add permissions array:
permissions: [
    {
        id: 'roleId',
        type: OverwriteType.Role,
        allow: [PermissionFlagsBits.SendMessages],
        deny: [PermissionFlagsBits.AttachFiles]
    }
]
```

## 🚨 Troubleshooting

### **Common Issues:**

#### **Bot Missing Permissions**
```
Error: Missing Access
```
**Solution:** Make sure your bot has `Administrator` permissions or at least:
- Manage Channels
- Manage Roles
- View Channels

#### **Rate Limited**
```
Error: You are being rate limited
```
**Solution:** The script includes 1-second delays. For larger servers, increase delays:
```javascript
await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds
```

#### **Role Position Errors**
```
Error: Invalid role position
```
**Solution:** Make sure your bot's role is higher than roles it's trying to create.

#### **Channel Already Exists**
The script checks for existing channels/roles and skips them, so it's safe to run multiple times.

## 🔧 Advanced Configuration

### **Server Settings to Configure After Setup:**

```yaml
Server Settings:
  Verification Level: Medium
  Content Filter: Scan media from members without roles
  Default Notifications: Only @mentions
  
Community Features:
  ✅ Enable Community Server
  ✅ Set up Welcome Screen
  ✅ Configure Server Insights
  
Moderation:
  ✅ Set up AutoMod (if available)
  ✅ Configure Explicit Content Filter
  ✅ Set Default Message Notifications
```

### **Additional Setup Steps:**

1. **Invite Core Bots:**
   - MEE6 (leveling)
   - Carl-bot (moderation)
   - Music bot

2. **Configure Bot Permissions:**
   - Assign bots to appropriate roles
   - Set channel-specific permissions

3. **Create Server Rules:**
   - Post rules in `📜-rules` channel
   - Pin important messages

4. **Set Up Welcome System:**
   - Configure welcome messages
   - Set up verification if needed

## 📊 Script Output

When you run the script, you'll see:

```
🚀 Starting Discord server setup...
📋 Setting up server: Your Server Name
🎭 Creating roles...
✅ Created role: Server Owner
✅ Created role: Administrator
... (continues for all roles)
📁 Creating channels...
✅ Created channel: 📋 INFORMATION
