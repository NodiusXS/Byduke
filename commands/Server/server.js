const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const strftime = require('strftime')
module.exports.run = async (client,message,args) => 
{
        message.delete(1);
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        let argsUser
        if (member) argsUser = member.user
        else argsUser = message.author
        let day = 1000 * 60 * 60 * 24
        let date1 = new Date(message.createdTimestamp)
        let date2 = new Date(argsUser.createdTimestamp)
        let date3 = new Date(message.guild.member(argsUser).joinedTimestamp)
        let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
        let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
        let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']
        let embed = new Discord.RichEmbed()
        .setDescription("Информация о сервере")
        .setColor('#10c7e2')
        .addField("Название сервера",message.guild.name,true)
        .addField('Уровень проверки', verifilv[message.guild.verificationLevel], true)
        .addField("Создание сервера",`${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.createdAt))}\n(${diff2} дн. назад)`, true)
        .addField("Вы присоеденились к серверу",`${strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp))}\n(${diff2} дн. назад)`, true)
        .addField("Кол-Во участников",message.guild.memberCount,true)
        .addField("Регион",message.guild.region,true)
        .addField('Каналы', `${message.guild.channels.filter(c => c.type == 'text').size} тестовых\n${message.guild.channels.filter(c => c.type == 'voice').size} голосовых`, true)
        .addField('AFK Канал', message.guild.afkChannel.name, true)
        .addField('Ролей', message.guild.roles.size, true)
        .addField('Смайликов', message.guild.emojis.size, true)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp(new Date(message.guild.createdTimestamp))
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
       
        message.channel.send({embed: embed});
        console.log(message.setTimestamp + message.author.tag + " написал команду /server");
    
};

module.exports.help = 
{
    name: "server"
};