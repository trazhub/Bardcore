import { Command, Context, Lavamusic } from '../../structures/index.js';
export default class Add extends Command {
    constructor(client: Lavamusic);
    run(client: Lavamusic, ctx: Context, args: string[]): Promise<any>;
}
