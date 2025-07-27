import { Events, Interaction, Collection } from 'discord.js';
import { commands } from '../utils/commandLoader';
import { logger } from '../utils/logger';
import { User } from '../models/User';

const cooldowns = new Collection<string, Collection<string, number>>();

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction: Interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = commands.get(interaction.commandName);

        if (!command) {
            logger.warn(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        // Cooldown handling
        if (!cooldowns.has(command.data.name)) {
            cooldowns.set(command.data.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.data.name)!;
        const defaultCooldownDuration = 3;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id)! + cooldownAmount;

            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1000);
                return interaction.reply({
                    content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`,
                    ephemeral: true
                });
            }
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

        // Track command usage
        try {
            await User.findOneAndUpdate(
                { userId: interaction.user.id, guildId: interaction.guild?.id },
                { $inc: { commandsUsed: 1 } },
                { upsert: true }
            );
        } catch (error) {
            logger.error('Error tracking command usage:', error);
        }

        // Execute command
        try {
            await command.execute(interaction);
            logger.info(`${interaction.user.tag} executed /${interaction.commandName} in ${interaction.guild?.name}`);
        } catch (error) {
            logger.error(`Error executing ${interaction.commandName}:`, error);

            const errorMessage = {
                content: 'There was an error while executing this command!',
                ephemeral: true
            };

            if (interaction.replied || interaction.deferred) {
                await interaction.followUp(errorMessage);
            } else {
                await interaction.reply(errorMessage);
            }
        }
    }
};