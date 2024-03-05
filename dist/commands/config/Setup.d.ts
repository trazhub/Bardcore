import { Command, Context, Lavamusic } from '../../structures/index.js';
export default class Setup extends Command {
    constructor(client: Lavamusic);
    run(client: Lavamusic, ctx: Context, args: string[]): Promise<any>;
}
