import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { Command } from '../../structures/index.js';
export default class About extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            description: {
                content: 'Shows information about the bot',
                examples: ['about'],
                usage: 'about',
            },
            category: 'info',
            aliases: ['ab'],
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
    async run(client, ctx) {
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setLabel('Invite Bardcore')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=1203071083440513145&permissions=8&scope=bot%20applications.commands`), new ButtonBuilder()
            .setLabel('Support Server')
            .setStyle(ButtonStyle.Link)
            .setURL('https://discord.gg/ebtk8WTyfM'));
        const embed = this.client
            .embed()
            .setAuthor({
            name: 'Bardcore',
            iconURL: 'https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png',
        })
            .setThumbnail('https://media.discordapp.net/attachments/876035356460462090/888434725235097610/20210820_124325.png')
            .setColor(this.client.color.main)
            .addFields([
            {
                name: 'Creator',
                value: '[TRAZHUB](https://github.com/trazhub)',
                inline: true,
            },
            {
                name: 'Repository',
                value: '[Here](https://github.com/)',
                inline: true,
            },
            {
                name: 'Support',
                value: '[Here](https://discord.gg/ebtk8WTyfM)',
                inline: true,
            },
            {
                name: '\u200b',
                value: `hmmm`,
                inline: true,
            },
        ]);
        return await ctx.sendMessage({
            content: '',
            embeds: [embed],
            components: [row],
        });
    }
}
//# sourceMappingURL=About.js.map