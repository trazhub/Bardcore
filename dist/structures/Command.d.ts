import { ApplicationCommandOption, PermissionResolvable } from 'discord.js';
import Lavamusic from './Lavamusic.js';
export default class Command {
    client: Lavamusic;
    name: string;
    nameLocalizations: any;
    description: {
        content: string | null;
        usage: string | null;
        examples: string[] | null;
    };
    descriptionLocalizations: any;
    aliases: string[];
    cooldown: number;
    args: boolean;
    player: {
        voice: boolean;
        dj: boolean;
        active: boolean;
        djPerm: string | null;
    };
    permissions: {
        dev: boolean;
        client: string[] | PermissionResolvable;
        user: string[] | PermissionResolvable;
    };
    slashCommand: boolean;
    options: ApplicationCommandOption[];
    category: string | null;
    constructor(client: Lavamusic, options: CommandOptions);
    run(_client: Lavamusic, _message: any, _args: string[]): Promise<any>;
}
interface CommandOptions {
    name: string;
    nameLocalizations?: any;
    description?: {
        content: string;
        usage: string;
        examples: string[];
    };
    descriptionLocalizations?: any;
    aliases?: string[];
    cooldown?: number;
    args?: boolean;
    player?: {
        voice: boolean;
        dj: boolean;
        active: boolean;
        djPerm: string | null;
    };
    permissions?: {
        dev: boolean;
        client: string[] | PermissionResolvable;
        user: string[] | PermissionResolvable;
    };
    slashCommand?: boolean;
    options?: ApplicationCommandOption[];
    category?: string;
}
export {};
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
