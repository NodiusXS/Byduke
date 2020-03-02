const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const strftime = require('strftime')

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser
    if (member) argsUser = member.user
    else argsUser = message.author
    let a = message.author

    let statuses = {
        online: 'В сети',
        idle: 'Нет на месте',
        dnd: 'Не беспокоить',
        offline: 'Не в сети'
    }
    let game
    if (!argsUser.presence.game) game = `Имеет статус **${statuses[argsUser.presence.status]}**`
    else if (argsUser.presence.game.type == 0) game = `Играет в **${argsUser.presence.game.name}**`
    else if (argsUser.presence.game.type == 1) game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url})`
    else if (argsUser.presence.game.type == 2) game = `Слушает **${argsUser.presence.game.name}**`
    else if (argsUser.presence.game.type == 3) game = `Смотрит **${argsUser.presence.game.name}**`

    let day = 1000 * 60 * 60 * 24
    let date1 = new Date(message.createdTimestamp)
    let date2 = new Date(argsUser.createdTimestamp)
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
    
        let bots
        if(a.bot = false)bots = "Бот"
        if(a.bot = true)bots = "Человек"
    

            
            let embed = new Discord.RichEmbed()
            .setDescription("Информация о пользователе бота Byduke")
            .setColor(message.guild.member(argsUser).displayHexColor)
            .addField("Имя",argsUser.username,true)
            .addField("Активность",game,true)
            .addField("Тэг",a.tag,true)
            .addField("Дискриминатор",a.discriminator,true)            
            .addField('Дата регистарции', `${strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp))}\n(${diff1} дн. назад)`, true)
            .addField('Дата вступления', `${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дн. назад)`, true)
            .addField('Роли', message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join(', ') || 'Не имеет')
            .addField("Дискриминатор",a.discriminator,true)
            .addField("ID",a.id,true)
            .addField("Проверка на принадлежность к ботам...",bots)
            .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
            .setThumbnail(a.avatarURL);
        
            message.author.send(embed);
            console.log(message.author.tag + " написал команду /userinfo"); 
           
}

module.exports.help = {
    name: "userinfo"
};