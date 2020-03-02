const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client, message,args) => 
{   
    message.delete(1);
    let embed = new Discord.RichEmbed()
        .setTitle("Bot info")
        .addField("Количество серверов:",client.guilds.size + " сервер(ов)",true)
        .addField("Количество пользователей:",client.users.size + " пользователь(ей)",true)
        .addField("Владелец:"," Steel Brotherhood Studio",true)
        .addField("Регион:","Россия",true)
        .addField("Тип разработки:"," Закрытый",true)
        .addField("Тип репазитория:"," Закрытый",true)
        .addField("Email: ","steelbrotherhood.studio@yandex.ru",true)
        .addField("Сервер владельца: ","[Steel Brotherhood Studio](https://discord.gg/4d5UWAq)",true)
        .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
        .setColor('#10c7e2')
        message.author.send(embed);
    console.log(message.author.tag + " написал команду /devinfo");   
}

module.exports.help = 
{
    name: "devinfo"
}