const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content; 
  var forwrite = msg.substr(6);
  
  message.delete(1);
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + ' убил крит. уроном ' + forwrite)
        .setImage('https://pa1.narvii.com/6514/c172e559b48913af5f7d92b24afe97559e3918c6_hq.gif'|| 'https://i.gifer.com/embedded/download/K02.gif')
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал punch " + forwrite);
  
};

module.exports.help =  {
  name: 'punch'
}
