import { Client, ClientOptions, Collection, EmbedBuilder } from 'discord.js';
import { Queue, ShoukakuClient } from './index.js';
import Logger from './Logger.js';
import ServerData from '../database/server.js';
import { Utils } from '../utils/Utils.js';
export default class Lavamusic extends Client {
    commands: Collection<string, any>;
    aliases: Collection<string, any>;
    db: ServerData;
    cooldown: Collection<string, any>;
    config: {
        token: string;
        prefix: string;
        color: {
            red: number;
            green: number;
            blue: number;
            yellow: number;
            main: number;
        };
        keepAlive: boolean;
        searchEngine: string;
        maxPlaylistSize: number;
        botStatus: string;
        botActivity: string;
        botActivityType: number;
        maxQueueSize: number;
        owners: any;
        clientId: string;
        clientSecret: string;
        guildId: string;
        logChannelId: string;
        links: {
            img: string;
        };
        icons: {
            youtube: string;
            spotify: string;
            soundcloud: string;
            applemusic: string;
            deezer: string;
        };
        production: true;
        lavalink: {
            url: string;
            auth: string;
            name: string;
            secure: boolean;
        }[];
    };
    logger: Logger;
    readonly color: {
        red: number;
        green: number;
        blue: number;
        yellow: number;
        main: number;
    };
    private body;
    shoukaku: ShoukakuClient;
    utils: typeof Utils;
    queue: Queue;
    constructor(options: ClientOptions);
    embed(): EmbedBuilder;
    start(token: string): Promise<void>;
    private loadCommands;
    private loadEvents;
}
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
