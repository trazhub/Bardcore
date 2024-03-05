import { ButtonInteraction, ChannelSelectMenuInteraction, MentionableSelectMenuInteraction, RoleSelectMenuInteraction, StringSelectMenuInteraction, UserSelectMenuInteraction } from 'discord.js';
import { Player } from 'shoukaku';
import { Song } from '../../structures/Dispatcher.js';
import { Dispatcher, Event, Lavamusic } from '../../structures/index.js';
export default class TrackStart extends Event {
    constructor(client: Lavamusic, file: string);
    run(player: Player, track: Song, dispatcher: Dispatcher): Promise<void>;
}
export declare function checkDj(client: Lavamusic, interaction: ButtonInteraction<'cached'> | StringSelectMenuInteraction<'cached'> | UserSelectMenuInteraction<'cached'> | RoleSelectMenuInteraction<'cached'> | MentionableSelectMenuInteraction<'cached'> | ChannelSelectMenuInteraction<'cached'>): Promise<boolean>;
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
