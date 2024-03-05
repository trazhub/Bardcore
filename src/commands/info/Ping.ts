import { Command, Context, Lavamusic } from '../../structures/index.js';

export default class Ping extends Command {
    constructor(client: Lavamusic) {
        super(client, {
            name: 'ping',
            description: {
                content: 'Shows the bot\'s ping',
                examples: ['ping'],
                usage: 'ping',
            },
            category: 'general',
            aliases: ['pong'],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [],
        });
    }
    public async run(client: Lavamusic, ctx: Context): Promise<any> {
        const msg = await ctx.sendDeferMessage('Pinging...');

        const embed = client
            .embed()
            .setAuthor({ name: 'Pong', iconURL: this.client.user.displayAvatarURL() })
            .setColor(this.client.color.main)
            .addFields([
                {
                    name: 'Bot Latency',
                    value: `\`\`\`ini\n[ ${
                        msg.createdTimestamp - ctx.createdTimestamp
                    }ms ]\n\`\`\``,
                    inline: true,
                },
                {
                    name: 'API Latency',
                    value: `\`\`\`ini\n[ ${Math.round(ctx.client.ws.ping)}ms ]\n\`\`\``,
                    inline: true,
                },
            ])
            .setFooter({
                text: `Requested by ${ctx.author.tag}`,
                iconURL: ctx.author.avatarURL({}),
            })
            .setTimestamp();
        return await ctx.editMessage({ content: '', embeds: [embed] });
    }
}


