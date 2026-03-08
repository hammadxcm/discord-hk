import { Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { logger } from './logger';

export interface Command {
    data: any;
    execute: (interaction: any) => Promise<void>;
    cooldown?: number;
}

export const commands = new Collection<string, Command>();

export async function loadCommands(): Promise<Command[]> {
    const commandsPath = join(__dirname, '..', 'commands');
    const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));
    
    const loadedCommands: Command[] = [];

    for (const file of commandFiles) {
        const filePath = join(commandsPath, file);
        try {
            const command = require(filePath);
            
            if ('data' in command && 'execute' in command) {
                commands.set(command.data.name, command);
                loadedCommands.push(command);
                logger.info(`Loaded command: ${command.data.name}`);
            } else {
                logger.warn(`Command at ${filePath} is missing required "data" or "execute" property`);
            }
        } catch (error) {
            logger.error(`Error loading command ${file}:`, error);
        }
    }

    return loadedCommands;
}