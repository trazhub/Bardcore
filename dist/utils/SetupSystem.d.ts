import { ColorResolvable, Message, TextChannel } from 'discord.js';
import { Song } from '../structures/Dispatcher.js';
import { Dispatcher, Lavamusic } from '../structures/index.js';
declare function setupStart(client: Lavamusic, query: string, player: Dispatcher, message: Message): Promise<void>;
declare function trackStart(msgId: any, channel: TextChannel, player: Dispatcher, track: Song, client: Lavamusic): Promise<void>;
declare function updateSetup(client: Lavamusic, guild: any): Promise<void>;
declare function buttonReply(int: any, args: string, color: ColorResolvable): Promise<void>;
declare function oops(channel: TextChannel, args: string): Promise<void>;
export { setupStart, trackStart, buttonReply, updateSetup, oops };
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
