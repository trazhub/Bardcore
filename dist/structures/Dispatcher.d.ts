import { Message, User } from 'discord.js';
import { Node, Player, Track } from 'shoukaku';
import { Lavamusic } from './index.js';
export declare class Song implements Track {
    encoded: string;
    info: {
        identifier: string;
        isSeekable: boolean;
        author: string;
        length: number;
        isStream: boolean;
        position: number;
        title: string;
        uri?: string;
        artworkUrl?: string;
        isrc?: string;
        sourceName: string;
        requester: User;
    };
    pluginInfo: unknown;
    constructor(track: Song | Track, user: User);
}
export default class Dispatcher {
    private client;
    guildId: string;
    channelId: string;
    player: Player;
    queue: Song[];
    stopped: boolean;
    previous: Song | null;
    current: Song | null;
    loop: 'off' | 'repeat' | 'queue';
    requester: User;
    repeat: number;
    node: Node;
    shuffle: boolean;
    paused: boolean;
    filters: Array<string>;
    autoplay: boolean;
    nowPlayingMessage: Message | null;
    history: Song[];
    constructor(options: DispatcherOptions);
    get exists(): boolean;
    get volume(): number;
    play(): Promise<void>;
    pause(): void;
    remove(index: number): void;
    previousTrack(): void;
    destroy(): void;
    setShuffle(shuffle: boolean): void;
    skip(skipto?: number): Promise<void>;
    seek(time: number): void;
    stop(): void;
    setLoop(loop: any): void;
    buildTrack(track: Song | Track, user: User): Song;
    isPlaying(): Promise<void>;
    Autoplay(song: Song): Promise<void>;
    setAutoplay(autoplay: boolean): Promise<void>;
}
export interface DispatcherOptions {
    client: Lavamusic;
    guildId: string;
    channelId: string;
    player: Player;
    node: Node;
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
