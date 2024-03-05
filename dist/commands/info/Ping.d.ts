import { Command, Context, Lavamusic } from '../../structures/index.js';
export default class Ping extends Command {
    constructor(client: Lavamusic);
    run(client: Lavamusic, ctx: Context): Promise<any>;
}
