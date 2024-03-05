import { Event, Lavamusic } from '../../structures/index.js';
export default class Ready extends Event {
    constructor(client: Lavamusic, file: string);
    run(): Promise<void>;
}
