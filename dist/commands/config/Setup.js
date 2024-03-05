import { ApplicationCommandOptionType, ChannelType, OverwriteType, PermissionFlagsBits, } from 'discord.js';
import { Command } from '../../structures/index.js';
import { getButtons } from '../../utils/Buttons.js';
export default class Setup extends Command {
    constructor(client) {
        super(client, {
            name: 'setup',
            description: {
                content: 'Sets up the bot',
                examples: ['setup create', 'setup delete', 'setup info'],
                usage: 'setup',
            },
            category: 'config',
            aliases: ['setup'],
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks', 'ManageChannels'],
                user: ['ManageGuild'],
            },
            slashCommand: true,
            options: [
                {
                    name: 'create',
                    description: 'Creates the song request channel',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'delete',
                    description: 'Deletes the song request channel',
                    type: ApplicationCommandOptionType.Subcommand,
                },
                {
                    name: 'info',
                    description: 'Shows the song request channel',
                    type: ApplicationCommandOptionType.Subcommand,
                },
            ],
        });
    }
    async run(client, ctx, args) {
        let subCommand;
        if (ctx.isInteraction) {
            subCommand = ctx.interaction.options.data[0].name;
        }
        else {
            subCommand = args[0];
        }
        const embed = client.embed().setColor(client.color.main);
        switch (subCommand) {
            case 'create': {
                const data = client.db.getSetup(ctx.guild.id);
                if (data && data.textId && data.msgId)
                    return await ctx.sendMessage({
                        embeds: [
                            {
                                description: 'The song request channel already exists',
                                color: client.color.red,
                            },
                        ],
                    });
                const textChannel = await ctx.guild.channels.create({
                    name: `${this.client.user.username}-song-requests`,
                    type: ChannelType.GuildText,
                    topic: 'Song requests for the music bot',
                    permissionOverwrites: [
                        {
                            type: OverwriteType.Member,
                            id: this.client.user.id,
                            allow: [
                                PermissionFlagsBits.ViewChannel,
                                PermissionFlagsBits.SendMessages,
                                PermissionFlagsBits.EmbedLinks,
                                PermissionFlagsBits.ReadMessageHistory,
                            ],
                        },
                        {
                            type: OverwriteType.Role,
                            id: ctx.guild.roles.everyone.id,
                            allow: [
                                PermissionFlagsBits.ViewChannel,
                                PermissionFlagsBits.SendMessages,
                                PermissionFlagsBits.ReadMessageHistory,
                            ],
                        },
                    ],
                });
                const player = this.client.queue.get(ctx.guild.id);
                const image = this.client.config.links.img;
                const desc = player && player.queue && player.current
                    ? `[${player.current.info.title}](${player.current.info.uri})`
                    : 'Nothing playing right now';
                embed.setDescription(desc).setImage(image);
                await textChannel
                    .send({
                    embeds: [embed],
                    components: getButtons(),
                })
                    .then(async (msg) => {
                    client.db.setSetup(ctx.guild.id, textChannel.id, msg.id);
                });
                const embed2 = client.embed().setColor(client.color.main);
                await ctx.sendMessage({
                    embeds: [
                        embed2.setDescription(`The song request channel has been created in <#${textChannel.id}>`),
                    ],
                });
                break;
            }
            case 'delete': {
                const data2 = client.db.getSetup(ctx.guild.id);
                if (!data2)
                    return await ctx.sendMessage({
                        embeds: [
                            {
                                description: 'The song request channel doesn\'t exist',
                                color: client.color.red,
                            },
                        ],
                    });
                client.db.deleteSetup(ctx.guild.id);
                await ctx.guild.channels.cache
                    .get(data2.textId)
                    .delete()
                    .catch(() => { null; });
                await ctx.sendMessage({
                    embeds: [
                        {
                            description: 'The song request channel has been deleted',
                            color: client.color.main,
                        },
                    ],
                });
                break;
            }
            case 'info': {
                const data3 = client.db.getSetup(ctx.guild.id);
                if (!data3)
                    return await ctx.sendMessage({
                        embeds: [
                            {
                                description: 'The song request channel doesn\'t exist',
                                color: client.color.red,
                            },
                        ],
                    });
                const channel = ctx.guild.channels.cache.get(data3.textId);
                embed
                    .setDescription(`The song request channel is <#${channel.id}>`)
                    .setColor(client.color.main);
                await ctx.sendMessage({
                    embeds: [embed],
                });
                break;
            }
            default:
                break;
        }
    }
}
//# sourceMappingURL=Setup.js.map