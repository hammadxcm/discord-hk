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

#### **Role Already Exists**
```
Error: Role already exists
```
**Solution:** The script skips existing roles. Delete roles manually or use different names.

#### **Channel Already Exists**
```
Error: Channel already exists
```
**Solution:** The script skips existing channels. Delete channels manually or use different names.

#### **Invalid Color Value**
```
Error: Invalid color
```
**Solution:** Use hex color values (0xFFFFFF format):
```javascript
color: 0xff0000,  // Red
color: 0x00ff00,  // Green  
color: 0x0000ff,  // Blue
```

## 🎯 Available Scripts

### **Main Setup Scripts:**
```bash
npm run setup-server              # Basic JavaScript setup
npm run setup-server-enhanced     # Enhanced setup with more features
npm run setup-server-tested       # Tested version with error handling
npm run setup-server-ts           # TypeScript version
npm run fix-failed-roles          # Fix specific role creation failures
```

### **Utility Scripts:**
```bash
npm run test-connection            # Test bot connection
npm run validate-setup             # Validate server configuration
```

## 🔄 Reset Server

To completely reset your server and start over:

1. **Manual Method:**
   - Delete all channels except general
   - Delete all custom roles
   - Run setup script again

2. **Script Method** (Coming Soon):
   ```bash
   npm run reset-server
   ```

## 📊 Setup Verification

After running the setup, verify everything was created:

### **Check Roles:**
```bash
npm run validate-setup
```

### **Manual Verification:**
- ✅ 10 roles created with proper colors
- ✅ Role hierarchy matches intended order
- ✅ Permissions are correctly assigned
- ✅ 32 channels created in 6 categories
- ✅ Staff channels are private
- ✅ Rules/announcements are read-only

## 🚀 Next Steps

After server automation:

1. **Configure Bots:**
   - Follow `/docs/bot-integrations.md`
   - Assign 🤖 Bots role to invited bots

2. **Add Server Rules:**
   - Edit `📜-rules` channel
   - Set up welcome messages

3. **Customize Settings:**
   - Adjust notification settings
   - Configure verification levels
   - Set up server insights

4. **Test Everything:**
   - Test role permissions
   - Verify channel access
   - Check bot functionality

## 🎨 Advanced Customization

### **Custom Welcome System:**
```javascript
// Add to your custom bot
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    channel.send(`Welcome ${member.user}! Please read the rules.`);
});
```

### **Auto Role Assignment:**
```javascript
// Automatically assign Member role to new users
client.on('guildMemberAdd', member => {
    const role = member.guild.roles.cache.find(r => r.name === '👤 Member');
    member.roles.add(role);
});
```

### **Reaction Role Setup:**
Use Carl-bot or other reaction role bots to set up:
- Color roles in welcome channel
- Gaming roles for LFG
- Notification preferences

## 🔧 Maintenance

### **Regular Tasks:**
- Review and update permissions monthly
- Clean up unused channels quarterly
- Update bot configurations as needed
- Monitor server growth and adjust limits

### **Growing Your Server:**
- Add more voice channels as needed
- Create game-specific channels for popular games
- Implement additional moderation bots
- Set up server events and activities

---

## 🎉 Conclusion

Your Discord server is now fully automated and ready for your community! The setup includes everything needed for a professional, well-organized server with proper moderation tools and member engagement features.

For additional features and bot integrations, check out `/docs/bot-integrations.md` for 35+ recommended Discord bots.