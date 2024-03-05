import { Command } from '../../structures/index.js';
export default class GuildList extends Command {
    constructor(client) {
        super(client, {
            name: 'guildlist',
            description: {
                content: 'List all guilds the bot is in',
                examples: ['guildlist'],
                usage: 'guildlist',
            },
            category: 'dev',
            aliases: ['glt'],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: false,
            options: [],
        });
    }
    async run(client, ctx) {
        const guilds = this.client.guilds.cache.map(g => `${g.name} (${g.id})`);
        let chunks = client.utils.chunk(guilds, 10);
        if (chunks.length === 0)
            chunks = 1;
        const pages = [];
        for (let i = 0; i < chunks.length; i++) {
            const embed = this.client
                .embed()
                .setColor(this.client.color.main)
                .setDescription(chunks[i].join('\n'))
                .setFooter({ text: `Page ${i + 1} of ${chunks.length}` });
            pages.push(embed);
        }
        return await client.utils.paginate(ctx, pages);
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
//# sourceMappingURL=GuildList.js.map