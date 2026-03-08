<div align="center">

# 🤖 Discord HK - Ultimate Server Setup

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.js.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/discord-hk?style=for-the-badge)](https://github.com/yourusername/discord-hk/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/discord-hk?style=for-the-badge)](https://github.com/yourusername/discord-hk/network)

<h3>🚀 The Ultimate Discord Server Setup & Custom Bot Template</h3>

*Transform your Discord server from basic to extraordinary in just 5 minutes!*

**Automated server configuration • 35+ bot integrations • Custom TypeScript bot • Production-ready**

</div>

<br/>

<div align="center">

### 🎯 What Makes This Special

| 🛡️ **Complete Automation** | 🚀 **Modern Architecture** | 📚 **Comprehensive Docs** |
|:---:|:---:|:---:|
| Instant 32+ channels setup | TypeScript + Discord.js v14 | Step-by-step guides |
| 10+ roles with hierarchy | MongoDB integration | 35+ bot tutorials |
| Security-first permissions | Production-ready code | Legal templates included |

</div>

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

<div align="center">

## 🚀 Lightning Fast Setup

**Get your professional Discord server running in under 5 minutes!**

</div>

<details>
<summary><h3>📦 Step 1: Clone & Install</h3></summary>

```bash
git clone https://github.com/yourusername/discord-hk-server.git
cd discord-hk-server
npm install
```

</details>

<details>
<summary><h3>⚙️ Step 2: Environment Setup</h3></summary>

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values (see Environment Configuration section)
nano .env
```

> 💡 **Tip**: Use VSCode for easier editing: `code .env`

</details>

<details>
<summary><h3>🗄️ Step 3: Database Setup</h3></summary>

Choose your preferred database option:

#### Option A: MongoDB Atlas (Recommended - Free)
1. Visit [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Get connection string
4. Add to `.env` file

#### Option B: Local MongoDB
```bash
# macOS
brew install mongodb/brew/mongodb-community
brew services start mongodb/brew/mongodb-community

# Ubuntu
sudo apt install mongodb
sudo systemctl start mongod
```

</details>

<details>
<summary><h3>🤖 Step 4: Discord Bot Setup</h3></summary>

1. **Create Application**: [Discord Developer Portal](https://discord.com/developers/applications)
2. **Create Bot**: Application → Bot → Reset Token
3. **Copy Token**: Add to `.env` file as `DISCORD_TOKEN`
4. **Enable Intents**: Turn on required bot intents
5. **Invite Bot**: Use OAuth2 URL generator with proper permissions

</details>

<details>
<summary><h3>🎯 Step 5: Launch Your Server</h3></summary>

```bash
# Test everything works
npm run test-connection

# Run automated server setup (creates 32+ channels & 10+ roles)
npm run setup-server-enhanced

# Start your custom bot
npm run dev
```

</details>

<div align="center">

### 🎉 **Congratulations!** 

Your Discord server is now fully configured with:
- ✅ **32+ organized channels** in 6 categories
- ✅ **10+ role hierarchy** with proper permissions  
- ✅ **Custom TypeScript bot** with moderation & features
- ✅ **Production-ready setup** with database integration

</div>

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

<div align="center">

## 📂 Project Architecture

**Well-organized, scalable structure following industry best practices**

</div>

<table>
<tr>
<td width="50%">

### 🎯 **Core Application**
```
src/
├── 📁 commands/           # Slash commands
│   ├── help.ts
│   └── ping.ts
├── 📁 events/             # Discord events  
│   ├── ready.ts
│   ├── interactionCreate.ts
│   ├── guildMemberAdd.ts
│   └── guildMemberRemove.ts
├── 📁 models/             # Database schemas
│   ├── User.ts
│   └── Guild.ts
├── 📁 utils/              # Helper functions
│   ├── logger.ts
│   ├── commandLoader.ts
│   ├── eventLoader.ts
│   └── validateEnv.ts
└── index.ts               # Entry point
```

</td>
<td width="50%">

### ⚙️ **Automation & Config**
```
scripts/
├── setup-server.js        # Basic setup
├── enhanced-setup.js      # Full automation
├── fix-failed-roles.js    # Error recovery
├── test-connection.js     # Connection test
└── validate-setup.js      # Config validation

docs/
├── server-automation.md   # Setup guides
├── bot-integrations.md    # 35+ bot tutorials  
├── setup-instructions.md  # Detailed walkthrough
└── legal/                 # Legal templates
    ├── terms-of-service.md
    ├── server-rules.md
    └── community-guidelines.md
```

</td>
</tr>
</table>

<div align="center">

**🔧 Configuration Files**
`.env.example` • `package.json` • `tsconfig.json` • `CLAUDE.md`

</div>

---

<div align="center">

## 🎮 Command Center

**All the scripts you need for development, setup, and deployment**

</div>

<table>
<tr>
<td width="33%">

### 🚀 **Development**
```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Code quality checks
npm run lint
npm run typecheck
```

</td>
<td width="33%">

### 🛠️ **Server Setup**
```bash
# Recommended setup
npm run setup-server-enhanced

# Alternative setups
npm run setup-server
npm run setup-server-tested
npm run setup-server-ts

# Fix issues
npm run fix-failed-roles
```

</td>
<td width="33%">

### 🔍 **Utilities**
```bash
# Test bot connection
npm run test-connection

# Validate configuration
npm run validate-setup

# Health check
npm run health-check
```

</td>
</tr>
</table>

---

<div align="center">

## 🛠️ Server Infrastructure Created

**Professional Discord server structure with proper hierarchy and permissions**

</div>

<table>
<tr>
<td width="50%">

### 🎭 **Role Hierarchy** (10 Roles)

<div align="center">

| Role | Permissions | Purpose |
|:---:|:---:|:---|
| 👑 | **Admin** | Server Owner |
| 🛡️ | **Manage** | Administrator |
| 🔨 | **Moderate** | Moderator |
| 👮 | **Helper** | Assistant Mod |
| 🎖️ | **Enhanced** | VIP Member |
| ⭐ | **Booster** | Nitro Booster |
| 🤖 | **Bot** | Discord Bots |
| 🎵 | **Music** | DJ Role |
| 🎮 | **Gaming** | Gamer |
| 👤 | **Basic** | Default Member |

</div>

</td>
<td width="50%">

### 📊 **Server Statistics**

<div align="center">

| 📁 **Categories** | 🔢 **Count** |
|:---:|:---:|
| 📋 Information | 5 channels |
| 💬 General Chat | 5 channels |
| 🎮 Gaming | 3 channels |
| 🔊 Voice | 5 channels |
| 🎭 Community | 4 channels |
| 🛠️ Moderation | 4 channels |

**Total: 32+ channels organized perfectly**

</div>

</td>
</tr>
</table>

<details>
<summary><h3>📋 Complete Channel Structure (Click to expand)</h3></summary>

<table>
<tr>
<td width="50%">

#### 📋 **INFORMATION**
- 📜 `rules`
- 📢 `announcements`  
- 🎉 `welcome`
- 📊 `server-stats`
- 🔗 `useful-links`

#### 💬 **GENERAL CHAT**
- 💬 `general`
- 🎮 `gaming`
- 🎵 `music-chat`
- 🤖 `bot-commands`
- 🗑️ `spam`

#### 🎮 **GAMING**
- 🎯 `looking-for-group`
- 🏆 `achievements`
- 📺 `streams`

</td>
<td width="50%">

#### 🔊 **VOICE CHANNELS**
- 🎵 `Music Room`
- 🎮 `Gaming Lounge`
- 📞 `General Voice`
- 🔒 `Private Room 1`
- 🔒 `Private Room 2`

#### 🎭 **COMMUNITY**
- 🎨 `media-sharing`
- 💡 `suggestions`
- 🎁 `giveaways`
- 🎊 `events`

#### 🛠️ **MODERATION** (Staff Only)
- 📝 `mod-logs`
- 🚨 `reports`
- 🎫 `tickets`
- 👮 `staff-chat`

</td>
</tr>
</table>

</details>

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

<div align="center">

---

### 🌟 **Star this project if it helped you!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/discord-hk?style=social)](https://github.com/yourusername/discord-hk/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/discord-hk?style=social)](https://github.com/yourusername/discord-hk/network)

---

<table>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" height="40"/>
<br/><strong>TypeScript</strong>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/>
<br/><strong>Discord.js</strong>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
<br/><strong>Node.js</strong>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" width="40" height="40"/>
<br/><strong>MongoDB</strong>
</td>
</tr>
</table>

**Made with ❤️ for the Discord community**

*Transform your Discord server from basic to extraordinary in just 5 minutes!*

<sub>Built by developers, for developers • Open source • Always free</sub>

</div>