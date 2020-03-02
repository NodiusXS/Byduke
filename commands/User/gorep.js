const Discord = require("discord.js");
let xp = require("../../functions/exp.json");

const fs = require("fs");

module.exports.run = async (bot, message, args) => {
   let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let argsUser;
    if (member) argsUser = member.user;
    else argsUser = message.author;
  if(!args[0]){message.channel.send("Вы не указали пользователя")}
  else if(!args[2]){message.channel.send("Вы не указали численное значение")}
  else if(id = args[0])
  {
    if((args[1]) == "m")
    {
      let embed = new Discord.RichEmbed()
      .setTitle("Репутация "+ argsUser.userAgent.username + " была понижена!")
      .addField("Репутация",xp[argsUser.id].rep + " - " + args[2],true)
      .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
      .setColor('#10c7e2')
      message.channel.send(embed);
      xp[argsUser.id].rep =  xp[argsUser.id].rep - parseInt(args[2])
      console.log(message.author.tag + " понизил репутацию " + args[0] + " на " + args[3] + " командой /gorep - " + args[3])
    };

    if((args[1]) == "p")
    {
      
      let embed = new Discord.RichEmbed()
      .setTitle("Репутация "+ argsUser.username + " была повышена!")
      .addField("Репутация",xp[argsUser.id].rep + " + " + args[2],true)
      .setFooter('By Steel Brotherhood Studio 2019','https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png') 
      .setColor('#10c7e2')
      message.channel.send(embed);
      xp[argsUser.id].rep = xp[argsUser.id].rep + parseInt(args[2])
      console.log(message.author.tag + " повысил репутацию " + args[0] + " на " + args[3] + " командой /gorep + " + args[3])
    };
    
  }
}
module.exports.help = {
  name: "gorep"
}