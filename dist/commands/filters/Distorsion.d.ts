import { Command, Context, Lavamusic } from '../../structures/index.js';
export default class Distorsion extends Command {
    constructor(client: Lavamusic);
    run(client: Lavamusic, ctx: Context): Promise<any>;
}
