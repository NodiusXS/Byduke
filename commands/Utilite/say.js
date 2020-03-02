const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
    
    var msg = message.content;
    message.delete(1);
    var forwrite = msg.substr(4);
    let av = new Discord.RichEmbed()
    .setColor("#10c7e2")
    .setDescription(forwrite)
    .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
    message.channel.send({embed: av});
    console.log(message.author.tag + " написал /say " + forwrite);
    
};

module.exports.help =  {
  name: 'say'
}