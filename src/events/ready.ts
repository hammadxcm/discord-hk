import { Client, Events, ActivityType } from 'discord.js';
import { logger } from '../utils/logger';

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client: Client) {
        if (!client.user) return;
        
        logger.info(`Bot is online! Logged in as ${client.user.tag}`);
        logger.info(`Bot is in ${client.guilds.cache.size} guilds`);
        logger.info(`Serving ${client.users.cache.size} users`);
        
        // Set bot activity
        const activities = [
            { name: 'your server grow', type: ActivityType.Watching },
            { name: 'for new members', type: ActivityType.Watching },
            { name: '/help for commands', type: ActivityType.Listening },
            { name: 'Discord HK Server', type: ActivityType.Playing },
            { name: 'the community', type: ActivityType.Watching }
        ];
        
        let currentActivity = 0;
        
        // Set initial activity
        client.user.setActivity(activities[currentActivity]);
        
        // Rotate activities every 5 minutes
        setInterval(() => {
            currentActivity = (currentActivity + 1) % activities.length;
            client.user?.setActivity(activities[currentActivity]);
        }, 5 * 60 * 1000);
        
        // Set bot status
        client.user.setStatus('online');
        
        logger.info('Bot initialization completed successfully');
    }
};