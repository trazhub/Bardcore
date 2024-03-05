import { EmbedBuilder } from 'discord.js';
import { Event } from '../../structures/index.js';
export default class GuildDelete extends Event {
    constructor(client, file) {
        super(client, file, {
            name: 'guildDelete',
        });
    }
    async run(guild) {
        let owner;
        try {
            owner = guild.members.cache.get(guild?.ownerId);
        }
        catch (e) {
            owner = await guild.fetchOwner();
        }
        if (!owner) {
            owner = {
                user: {
                    tag: 'Unknown#0000',
                },
            };
        }
        const embed = new EmbedBuilder()
            .setColor(this.client.config.color.red)
            .setAuthor({ name: guild.name, iconURL: guild.iconURL({ extension: 'jpeg' }) })
            .setDescription(`**${guild.name}** has been removed from my guilds!`)
            .setThumbnail(guild.iconURL({ extension: 'jpeg' }))
            .addFields({ name: 'Owner', value: owner.user.tag, inline: true }, { name: 'Members', value: guild.memberCount.toString(), inline: true }, {
            name: 'Created At',
            value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
            inline: true,
        }, {
            name: 'Removed At',
            value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
            inline: true,
        }, { name: 'ID', value: guild.id, inline: true })
            .setTimestamp();
        const channel = (await this.client.channels.fetch(this.client.config.logChannelId));
        if (!channel)
            return;
        return await channel.send({ embeds: [embed] });
    }
}
//# sourceMappingURL=GuildDelete.js.map