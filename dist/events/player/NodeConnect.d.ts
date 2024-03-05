import { Event, Lavamusic } from '../../structures/index.js';
export default class NodeConnect extends Event {
    constructor(client: Lavamusic, file: string);
    run(node: string): Promise<void>;
}
