import { AutocompleteInteraction, CommandInteraction } from 'discord.js';
import { Event, Lavamusic } from '../../structures/index.js';
export default class InteractionCreate extends Event {
    constructor(client: Lavamusic, file: string);
    run(interaction: CommandInteraction | AutocompleteInteraction): Promise<any>;
}
/**
 * Project: lavamusic
 * user: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
