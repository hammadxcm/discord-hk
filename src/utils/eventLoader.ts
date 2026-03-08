import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { logger } from './logger';

export async function loadEvents(client: Client): Promise<number> {
    const eventsPath = join(__dirname, '..', 'events');
    const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));
    
    let loadedEvents = 0;

    for (const file of eventFiles) {
        const filePath = join(eventsPath, file);
        try {
            const event = require(filePath);
            
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
            
            loadedEvents++;
            logger.info(`Loaded event: ${event.name}`);
        } catch (error) {
            logger.error(`Error loading event ${file}:`, error);
        }
    }

    return loadedEvents;
}