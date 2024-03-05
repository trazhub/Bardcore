import config from '../../config.js';
import { Event } from '../../structures/index.js';
export default class Ready extends Event {
    constructor(client, file) {
        super(client, file, {
            name: 'ready',
        });
    }
    async run() {
        this.client.logger.success(`${this.client.user?.tag} is ready!`);
        this.client.user?.setPresence({
            activities: [
                {
                    name: config.botActivity,
                    type: config.botActivityType,
                },
            ],
            status: config.botStatus,
        });
    }
}
//# sourceMappingURL=Ready.js.map