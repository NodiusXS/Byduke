const Discord = module.require('discord.js');
const client = new Discord.Client();
const fs = require('fs-extra');
let coins = require("../../functions/coins.json");
let exp = require("../../functions/exp.json");
module.exports.run = async (client, message, args) => {
	 let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let argsUser;
    if (member) argsUser = member.user;
    else argsUser = message.author;
    message.delete(1);
    if(!args[0])
    { 
        let level = exp[message.author.id].level;
        let xps = exp[message.author.id].xp;
        let reput = exp[message.author.id].rep;
        let Bykon = coins[message.author.id].coins;
        let nlevel = level*1500;
        let tonext = nlevel - xps;
        let embed = new Discord.RichEmbed()
        .setTitle("Info User")
        .setDescription("Показатели")
        .addField("Уровень",level,true)
        .addField("XP",xps + "/" + nlevel + "XP",true)
        .addField("До следующего уровня:", tonext + "XP",true)
        .addField("ByCoin",Bykon + " ByCoin",true)
        .addField("Репутация",reput,true)
        .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
        .setColor('#10c7e2')
        message.channel.send(embed);
        console.log(message.author.tag + " узнал(а) свои показатели командой /info")
    }
    else if(args[0] == client.user.id)
    {
        let level = exp[args[0]].level;
        let xps = exp[args[0]].xp;
		let reput = exp[args[0]].rep;
		let Bykon = coins[args[0]].coins;
        let nlevel = level*1500;
        let tonext = nlevel - xps;
        let embed = new Discord.RichEmbed()
        .setTitle("Info User" + argsUser.userAgent.username)
        .addField("Уровень",level,true)
        .addField("XP",xps + "/" + nlevel + "XP",true)
        .addField("До следующего уровня:", tonext + "XP",true)
        .addField("ByCoin",Bykon + " ByCoin",true)
        .addField("Репутация",reput,true)
        .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
        .setColor('#10c7e2')
        message.channel.send(embed);
        console.log(message.author.tag + " узнал(а) показатели" + "командой /info")
    }
    
    else ()=>{console.log("Команда /info - НЕУДАЧА"+ message.author.tag);message.channel.send("Что-то пошло не так..." + "Пользователя с таким ID не найдено");}

};

module.exports.help = {
    name: "info"
}