import config from '../../config.js';
import { Event, Lavamusic } from '../../structures/index.js';
export default class Ready extends Event {
    constructor(client: Lavamusic, file: string) {
        super(client, file, {
            name: 'ready',
        });
    }
    public async run(): Promise<void> {
        this.client.logger.success(`${this.client.user?.tag} is ready!`);

        this.client.user?.setPresence({
            activities: [
                {
                    name: config.botActivity,
                    type: config.botActivityType,
                },
            ],
            status: config.botStatus as any,
        });
    }
}

