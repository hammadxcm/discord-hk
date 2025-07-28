# 🤖 Discord Server Setup & Custom Bot Template

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

**The ultimate Discord server setup template** combining automated server configuration, comprehensive bot integrations, and a custom TypeScript bot. Create a professional Discord server in minutes with 35+ bot recommendations and automated setup scripts.

## ✨ What You'll Get

### 🛡️ Complete Server Automation
- **Instant Setup**: Automated scripts create 32+ channels and 10+ roles
- **Professional Structure**: Organized categories with proper permissions
- **Security Ready**: Built-in moderation channels and role hierarchy
- **Bot Integration**: Setup guides for 35+ popular Discord bots

### 🚀 Custom TypeScript Bot
- **Modern Architecture**: TypeScript with Discord.js v14
- **Database Integration**: MongoDB with comprehensive user/guild models
- **Modular Design**: Easy to extend with new commands and features
- **Production Ready**: Logging, error handling, and validation included

### 📚 Comprehensive Documentation
- **Step-by-Step Guides**: From Discord Developer Portal to deployment
- **Bot Integration Tutorials**: Setup instructions for popular bots
- **Legal Templates**: Terms of service, rules, and guidelines
- **Troubleshooting**: Common issues and solutions

---

## 🚀 Quick Start (5 Minutes Setup)

### 1. **Clone & Install**
```bash
git clone https://github.com/yourusername/discord-hk-server.git
cd discord-hk-server
npm install
```

### 2. **Environment Setup**
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values (see Environment Configuration section)
nano .env
```

### 3. **Database Setup**
```bash
# Install MongoDB locally or use MongoDB Atlas (free)
# Local MongoDB:
brew install mongodb/brew/mongodb-community  # macOS
# OR
sudo apt install mongodb  # Ubuntu

# Start MongoDB
brew services start mongodb/brew/mongodb-community  # macOS
# OR
sudo systemctl start mongod  # Ubuntu
```

### 4. **Discord Bot Setup**
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create new application → Bot → Reset Token
3. Copy token to `.env` file
4. Enable required intents (see Bot Configuration section)

### 5. **Run Automated Server Setup**
```bash
# Test bot connection first
npm run test-connection

# Run automated server setup
npm run setup-server-enhanced

# Start the bot
npm run dev
```

🎉 **Done!** Your Discord server is now fully configured with channels, roles, and a custom bot!

---

## 📋 Prerequisites

### Required Software
- **Node.js** v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** v8.0.0 or higher (comes with Node.js)
- **MongoDB** ([Local](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/atlas))
- **Git** ([Download](https://git-scm.com/downloads))

### Discord Requirements
- Discord account with server admin permissions
- Discord Developer Portal access

### Optional Enhancements
- **MongoDB Atlas** (cloud database - free tier available)
- **Railway/Heroku** (for hosting the bot online)
- **External API Keys** (YouTube, Spotify, OpenAI for enhanced features)

---

## 🔧 Detailed Setup Guide

### Step 1: Discord Developer Portal Setup

#### 1.1 Create Discord Application
1. Visit [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Name your bot (e.g., "My Server Bot")
4. Save and note the **Application ID**

#### 1.2 Create Bot User
1. Go to **"Bot"** section
2. Click **"Add Bot"**
3. Click **"Reset Token"** and copy the token
4. **⚠️ Keep this token secret! Never share it publicly.**

#### 1.3 Configure Bot Settings
```yaml
Required Settings:
  ✅ Public Bot: OFF (recommended for private servers)
  ✅ Requires OAuth2 Code Grant: OFF
  ✅ Presence Intent: ON
  ✅ Server Members Intent: ON  
  ✅ Message Content Intent: ON
```

#### 1.4 Bot Permissions
Select these permissions for your bot:
```yaml
General Permissions:
  ✅ Manage Roles
  ✅ Manage Channels
  ✅ Kick Members
  ✅ Ban Members
  ✅ Manage Nicknames
  ✅ Manage Emojis and Stickers
  ✅ View Audit Log
  ✅ View Server Insights

Text Permissions:
  ✅ Send Messages
  ✅ Manage Messages
  ✅ Embed Links
  ✅ Attach Files
  ✅ Read Message History
  ✅ Use External Emojis
  ✅ Add Reactions

Voice Permissions:
  ✅ Connect
  ✅ Speak
  ✅ Mute Members
  ✅ Deafen Members
  ✅ Move Members
```

#### 1.5 Invite Bot to Server
1. Go to **"OAuth2"** → **"URL Generator"**
2. Select **"bot"** scope
3. Select permissions from above
4. Copy and visit the generated URL
5. Select your server and authorize

### Step 2: Environment Configuration

#### 2.1 Required Environment Variables
Edit your `.env` file with these **required** values:

```bash
# Discord Configuration (Required)
DISCORD_TOKEN=your_bot_token_from_developer_portal
DISCORD_CLIENT_ID=your_application_id_from_developer_portal  
DISCORD_GUILD_ID=your_server_id

# Database Configuration (Required)
MONGODB_URI=mongodb://localhost:27017/discord-hk
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/discord-hk
```

#### 2.2 How to Get Your Server ID
1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
2. Right-click your server name
3. Click **"Copy Server ID"**
4. Paste into `DISCORD_GUILD_ID`

#### 2.3 Optional Environment Variables
```bash
# Web Dashboard (Optional)
PORT=3000
JWT_SECRET=your_random_jwt_secret_here
SESSION_SECRET=your_random_session_secret_here

# External APIs (Optional - for enhanced features)
YOUTUBE_API_KEY=your_youtube_api_key_here
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
OPENAI_API_KEY=your_openai_api_key_here

# Bot Customization (Optional)
BOT_PREFIX=!
BOT_ACTIVITY=Watching over the server
BOT_STATUS=online
MAX_WARNS=3
```

### Step 3: Database Setup

#### Option A: Local MongoDB
```bash
# macOS with Homebrew
brew install mongodb/brew/mongodb-community
brew services start mongodb/brew/mongodb-community

# Ubuntu/Debian
sudo apt update
sudo apt install mongodb
sudo systemctl start mongod
sudo systemctl enable mongod

# Windows
# Download MongoDB Community Server from mongodb.com
# Follow installation wizard
```

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster (free tier available)
3. Create database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string and update `MONGODB_URI` in `.env`

### Step 4: Installation & Setup

#### 4.1 Install Dependencies
```bash
npm install
```

#### 4.2 Test Your Configuration
```bash
# Test bot connection
npm run test-connection

# Validate environment variables
npm run validate-setup
```

#### 4.3 Run Server Automation
```bash
# Choose one of these setup scripts:

# Enhanced setup (Recommended)
npm run setup-server-enhanced

# Basic setup
npm run setup-server

# TypeScript version
npm run setup-server-ts

# Tested version with extra error handling
npm run setup-server-tested
```

#### 4.4 Start the Bot
```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm run build
npm start

# Check if everything works
npm run typecheck
npm run lint
```

---

## 📂 Project Structure

```
discord-hk-server/
├── 📁 src/                    # TypeScript source code
│   ├── 📁 commands/           # Slash commands
│   │   ├── help.ts
│   │   └── ping.ts
│   ├── 📁 events/             # Discord events
│   │   ├── ready.ts
│   │   ├── interactionCreate.ts
│   │   ├── guildMemberAdd.ts
│   │   └── guildMemberRemove.ts
│   ├── 📁 models/             # Database models
│   │   ├── User.ts
│   │   └── Guild.ts
│   ├── 📁 utils/              # Utility functions
│   │   ├── logger.ts
│   │   ├── commandLoader.ts
│   │   ├── eventLoader.ts
│   │   └── validateEnv.ts
│   └── index.ts               # Main bot file
├── 📁 scripts/                # Automation scripts
│   ├── setup-server.js        # Basic server setup
│   ├── enhanced-setup.js      # Enhanced server setup
│   ├── fix-failed-roles.js    # Fix role creation issues
│   ├── test-connection.js     # Test bot connection
│   └── validate-setup.js      # Validate configuration
├── 📁 docs/                   # Documentation
│   ├── server-automation.md   # Server setup guide
│   ├── bot-integrations.md    # 35+ bot recommendations
│   ├── setup-instructions.md  # Detailed setup guide
│   └── 📁 legal/              # Legal templates
│       ├── terms-of-service.md
│       ├── server-rules.md
│       └── community-guidelines.md
├── .env.example               # Environment template
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
└── README.md                  # This file
```

---

## 🎮 Available Scripts

### Main Commands
```bash
npm run dev          # Start bot in development mode
npm run build        # Compile TypeScript to JavaScript
npm start            # Start bot in production mode
npm run lint         # Run ESLint for code quality
npm run typecheck    # Check TypeScript types
```

### Server Setup Scripts
```bash
npm run setup-server              # Basic server setup
npm run setup-server-enhanced     # Enhanced setup (recommended)
npm run setup-server-tested       # Extra error handling
npm run setup-server-ts           # TypeScript version
npm run fix-failed-roles          # Fix specific role issues
```

### Utility Scripts
```bash
npm run test-connection   # Test bot connection to Discord
npm run validate-setup    # Validate environment configuration
```

---

## 🛠️ What Gets Created

### 🎭 Roles (10 roles with hierarchy)
```yaml
👑 Server Owner     # Administrator permissions
🛡️ Administrator    # Full server management  
🔨 Moderator        # Moderation powers
👮 Helper           # Basic moderation
🎖️ VIP             # Enhanced permissions
⭐ Nitro Booster    # Server boosters
🤖 Bots            # For Discord bots
🎵 DJ              # Music permissions
🎮 Gamer           # Gaming role
👤 Member          # Default member role
```

### 📁 Channels (32 channels in 6 categories)
```yaml
📋 INFORMATION:
  ├── 📜-rules
  ├── 📢-announcements  
  ├── 🎉-welcome
  ├── 📊-server-stats
  └── 🔗-useful-links

💬 GENERAL CHAT:
  ├── 💬-general
  ├── 🎮-gaming
  ├── 🎵-music-chat
  ├── 🤖-bot-commands
  └── 🗑️-spam

🎮 GAMING:
  ├── 🎯-looking-for-group
  ├── 🏆-achievements
  └── 📺-streams

🔊 VOICE CHANNELS:
  ├── 🎵 Music Room
  ├── 🎮 Gaming Lounge
  ├── 📞 General Voice
  ├── 🔒 Private Room 1
  └── 🔒 Private Room 2

🎭 COMMUNITY:
  ├── 🎨-media-sharing
  ├── 💡-suggestions
  ├── 🎁-giveaways
  └── 🎊-events

🛠️ MODERATION (Staff Only):
  ├── 📝-mod-logs
  ├── 🚨-reports
  ├── 🎫-tickets
  └── 👮-staff-chat
```

---

## 🤖 Bot Features

### Core Commands
- `/ping` - Check bot latency and API response time
- `/help` - Display available commands and features

### Moderation System
- User warning system with database tracking
- Mute/timeout functionality with duration support
- Kick and ban commands with reason logging
- Comprehensive moderation history

### Leveling & Economy
- Custom XP system (separate from MEE6)
- Virtual currency with bank system
- Daily and weekly rewards
- Activity tracking (messages, voice time)

### User Management
- Welcome/goodbye message system
- Auto-role assignment for new members
- Member analytics and statistics
- Birthday tracking and celebrations

### Database Models
- **User Model**: XP, economy, moderation history, preferences
- **Guild Model**: Server configuration, settings, custom commands

---

## 🚀 Deployment

### Local Development
```bash
# Clone and setup (see Quick Start above)
npm run dev
```

### Railway (Recommended)
1. Fork this repository
2. Connect to [Railway](https://railway.app/)
3. Add environment variables in Railway dashboard
4. Deploy automatically from GitHub

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-bot-name

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set DISCORD_TOKEN=your_token_here
heroku config:set DISCORD_CLIENT_ID=your_client_id_here
heroku config:set DISCORD_GUILD_ID=your_guild_id_here

# Deploy
git push heroku main
```

### VPS/Server
```bash
# Install Node.js and MongoDB on your server
# Clone repository
git clone https://github.com/yourusername/discord-hk-server.git
cd discord-hk-server

# Install dependencies
npm install

# Build TypeScript
npm run build

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start dist/index.js --name "discord-bot"
pm2 startup
pm2 save
```

---

## 🔧 Customization

### Adding New Commands
1. Create new file in `src/commands/`
2. Follow the command template:
```typescript
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yourcommand')
        .setDescription('Your command description'),
    
    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply('Hello World!');
    },
    
    cooldown: 5 // seconds
};
```

### Adding New Events
1. Create new file in `src/events/`
2. Follow the event template:
```typescript
import { Events } from 'discord.js';

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Your event logic here
    }
};
```

### Modifying Server Setup
Edit the setup scripts in `scripts/` directory to customize:
- Role names, colors, and permissions
- Channel names and structure
- Category organization
- Permission overrides

### Database Customization
Modify the models in `src/models/` to add:
- New user fields
- Guild-specific settings
- Custom data tracking
- Additional analytics

---

## 🎯 Bot Integration Guide

This template includes setup guides for 35+ popular Discord bots:

### Essential Bots
- **MEE6** - Leveling and basic moderation
- **Carl-bot** - Advanced automod and reaction roles
- **Dyno** - Backup moderation and server management
- **Jockie Music** - High-quality music streaming

### Specialized Bots
- **GiveawayBot** - Giveaway management
- **TicketTool** - Support ticket system
- **Voice Master** - Dynamic voice channel creation
- **YAGPDB** - Advanced custom commands

**See full guide:** [`docs/bot-integrations.md`](docs/bot-integrations.md)

---

## 📚 Documentation

### Setup Guides
- [`docs/setup-instructions.md`](docs/setup-instructions.md) - Detailed setup walkthrough
- [`docs/server-automation.md`](docs/server-automation.md) - Automation script documentation
- [`docs/bot-integrations.md`](docs/bot-integrations.md) - 35+ bot integration guides

### Legal Templates
- [`docs/legal/terms-of-service.md`](docs/legal/terms-of-service.md)
- [`docs/legal/server-rules.md`](docs/legal/server-rules.md)
- [`docs/legal/community-guidelines.md`](docs/legal/community-guidelines.md)

---

## 🛠️ Troubleshooting

### Common Issues

#### Bot Not Responding
```bash
# Check bot connection
npm run test-connection

# Verify token in .env
# Check bot permissions in Discord server
# Ensure bot is online in server member list
```

#### Database Connection Failed
```bash
# Check MongoDB is running
brew services start mongodb/brew/mongodb-community  # macOS
sudo systemctl start mongod  # Linux

# Verify MONGODB_URI in .env
# Check MongoDB Atlas whitelist settings
```

#### Permission Errors During Setup
```bash
# Ensure bot has Administrator permission
# Check bot role is higher than roles it's trying to create
# Verify bot has Manage Channels and Manage Roles permissions
```

#### TypeScript Compilation Errors
```bash
npm run typecheck  # Check for type errors
npm run lint       # Check for linting issues
npm install        # Reinstall dependencies
```

### Getting Help
1. Check the [Issues](https://github.com/yourusername/discord-hk-server/issues) page
2. Read the documentation in `docs/` folder
3. Join our [Discord Support Server](https://discord.gg/your-invite)
4. Create a new issue with detailed information

---

## 🤝 Contributing

### Development Setup
```bash
# Fork and clone your fork
git clone https://github.com/your-username/discord-hk-server.git
cd discord-hk-server

# Create development branch
git checkout -b feature/your-feature-name

# Install dependencies
npm install

# Make your changes and test
npm run dev
npm run typecheck
npm run lint

# Commit and push
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name

# Create pull request
```

### Contributing Guidelines
- Follow TypeScript best practices
- Add JSDoc comments for new functions
- Update documentation for new features
- Test your changes thoroughly
- Follow the existing code style

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Features Roadmap

### Coming Soon
- [ ] Web dashboard for server management
- [ ] Advanced analytics and insights
- [ ] Multi-server support
- [ ] Plugin system for custom features
- [ ] Advanced security features
- [ ] Integration with more external APIs

### Completed
- [x] Automated server setup scripts
- [x] Custom TypeScript bot with database
- [x] Comprehensive documentation
- [x] 35+ bot integration guides
- [x] Legal document templates
- [x] Production-ready deployment guides

---

## 💫 Support This Project

If this template helped you create an awesome Discord server, consider:

- ⭐ **Star this repository**
- 🔄 **Share with friends**
- 🐛 **Report bugs or suggest features**
- 💝 **Contribute to the codebase**

---

## 📞 Support & Community

- **Documentation**: [`docs/`](docs/) folder
- **Issues**: [GitHub Issues](https://github.com/yourusername/discord-hk-server/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/discord-hk-server/discussions)
- **Discord**: [Join our support server](https://discord.gg/your-invite)

---

**Made with ❤️ for the Discord community**

*Transform your Discord server from basic to extraordinary in just 5 minutes!*