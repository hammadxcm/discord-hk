import { logger } from './logger';

interface EnvironmentVariables {
    DISCORD_TOKEN: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_GUILD_ID: string;
    MONGODB_URI: string;
}

export function validateEnvironment(): void {
    const required: (keyof EnvironmentVariables)[] = [
        'DISCORD_TOKEN',
        'DISCORD_CLIENT_ID',
        'DISCORD_GUILD_ID',
        'MONGODB_URI'
    ];

    const missing: string[] = [];

    for (const variable of required) {
        if (!process.env[variable]) {
            missing.push(variable);
        }
    }

    if (missing.length > 0) {
        logger.error(`Missing required environment variables: ${missing.join(', ')}`);
        logger.error('Please check your .env file and ensure all required variables are set');
        throw new Error('Missing required environment variables');
    }

    // Validate Discord token format
    if (!process.env.DISCORD_TOKEN?.match(/^[\w-]+\.[\w-]+\.[\w-]+$/)) {
        logger.error('Invalid Discord token format');
        throw new Error('Invalid Discord token format');
    }

    // Validate MongoDB URI format
    if (!process.env.MONGODB_URI?.startsWith('mongodb')) {
        logger.error('Invalid MongoDB URI format');
        throw new Error('Invalid MongoDB URI format');
    }

    logger.info('Environment validation passed');
}