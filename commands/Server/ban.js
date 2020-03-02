const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let profile = require("../../profile.json");
module.exports.run = async (client,message,args) => {
    message.delete(1);
    var forwrite = msg.substr(4);
    try{
      
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.channel.User;
    if(forwrite == 0 ) return message.channel.send("Вы не указали пользователя");
    if(!rUser) return message.channel.send("Пользователь не найден");
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#10c7e2')
    .addField("Администратор",message.author.username)
    .addField("Забанил",`${rUser.user.username}`)
    .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
    
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
};