const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../../profile.json");
const client = new Discord.Client();
module.exports.run = async (bot,message,args) => {
    message.delete(1);
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.channel.rUser;
    if(!args[0]) return message.channel.send("Вы не указали пользователя");
    if(!rUser) return message.channel.send("Пользователь не найден");
    let embed = new Discord.RichEmbed()
    .setDescription("Кик")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick("123");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};