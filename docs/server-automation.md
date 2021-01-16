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
- ✅ **Proper permissio