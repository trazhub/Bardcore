export default class ServerData {
    constructor();
    intialize(): void;
    get(guildId: string): any;
    setPrefix(guildId: string, prefix: string): void;
    set_247(guildId: string, textId: string, voiceId: string): void;
    delete_247(guildId: string): void;
    setDj(guildId: string, mode: boolean): void;
    getPrefix(guildId: string): any;
    get_247(guildId?: string): any;
    getDj(guildId: string): any;
    getRoles(guildId: string): any;
    addRole(guildId: string, roleId: string): void;
    removeRole(guildId: string, roleId: string): void;
    clearRoles(guildId: string): void;
    getBotChannel(guildId: string): any;
    setBotChannel(guildId: string, textId: string): void;
    getSetup(guildId: string): any;
    setSetup(guildId: string, textId: string, messageId: string): void;
    deleteSetup(guildId: string): void;
    getUser(userId: string): any;
    getPLaylist(userId: string, name: string): any;
    createPlaylist(userId: string, name: string): void;
    deletePlaylist(userId: string, name: string): void;
    addSong(userId: string, name: string, song: string): void;
    removeSong(userId: string, name: string, song: string): void;
}
