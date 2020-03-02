const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (bot,message,args) => 
{
    
    
        message.delete(1);
        let embed = new Discord.RichEmbed()
      .setTitle("Пригласить бота на сервер")
      .setDescription("[Пригласить](https://discordapp.com/oauth2/authorize?client_id=556715335890239509&scope=bot&permissions=8)")
      .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
      .setColor("#10c7e2");
    message.channel.send("Ссылка для приглашения бота на сервер была отправлена в ЛС")
    message.author.send(embed);  
    console.log(message.author.tag + " написал команду /join");
};


module.exports.help = 
{
    name: "join"
};