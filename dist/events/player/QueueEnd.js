import { Event } from '../../structures/index.js';
import { updateSetup } from '../../utils/SetupSystem.js';
export default class QueueEnd extends Event {
    constructor(client, file) {
        super(client, file, {
            name: 'queueEnd',
        });
    }
    async run(player, track, dispatcher) {
        const guild = this.client.guilds.cache.get(dispatcher.guildId);
        if (!guild)
            return;
        if (dispatcher.loop === 'repeat')
            dispatcher.queue.unshift(track);
        if (dispatcher.loop === 'queue')
            dispatcher.queue.push(track);
        if (dispatcher.autoplay) {
            await dispatcher.Autoplay(track);
        }
        else {
            dispatcher.autoplay = false;
        }
        if (dispatcher.loop === 'off') {
            dispatcher.previous = dispatcher.current;
            dispatcher.current = null;
        }
        await updateSetup(this.client, guild);
    }
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
//# sourceMappingURL=QueueEnd.js.map