import { Client, GatewayIntentBits, Events, REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import { connect } from 'mongoose';
import { logger } from './utils/logger';
import { loadCommands } from './utils/commandLoader';
import { loadEvents } from './utils/eventLoader';
import { validateEnvironment } from './utils/validateEnv';

config();

class DiscordBot {
    public client: Client;
    private rest: REST;

    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildModeration,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildWebhooks
            ]
        });

        this.rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);
    }

    async start(): Promise<void> {
        try {
            // Validate environment variables
            validateEnvironment();
            
            // Connect to database
            await this.connectDatabase();
            
            // Load commands and events
            await this.loadBotComponents();
            
            // Login to Discord
            await this.client.login(process.env.DISCORD_TOKEN);
            
            logger.info('Discord bot started successfully!');
        } catch (error) {
            logger.error('Failed to start bot:', error);
            process.exit(1);
        }
    }

    private async connectDatabase(): Promise<void> {
        try {
            await connect(process.env.MONGODB_URI!);
            logger.info('Connected to MongoDB');
        } catch (error) {
            logger.error('Failed to connect to database:', error);
            throw error;
        }
    }

    private async loadBotComponents(): Promise<void> {
        try {
            // Load commands
            const commands = await loadCommands();
            logger.info(`Loaded ${commands.length} commands`);

            // Register commands
            await this.registerCommands(commands);

            // Load events
            const events = await loadEvents(this.client);
            logger.info(`Loaded ${events} events`);
        } catch (error) {
            logger.error('Failed to load bot components:', error);
            throw error;
        }
    }

    private async registerCommands(commands: any[]): Promise<void> {
        try {
            const commandData = commands.map(cmd => cmd.data.toJSON());
            
            await this.rest.put(
                Routes.applicationGuildCommands(
                    process.env.DISCORD_CLIENT_ID!,
                    process.env.DISCORD_GUILD_ID!
                ),
                { body: commandData }
            );

            logger.info('Successfully registered application commands');
        } catch (error) {
            logger.error('Failed to register commands:', error);
            throw error;
        }
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    logger.info('Received SIGINT, shutting down gracefully');
    process.exit(0);
});

process.on('SIGTERM', () => {
    logger.info('Received SIGTERM, shutting down gracefully');
    process.exit(0);
});

// Start the bot
const bot = new DiscordBot();
bot.start().catch(console.error);