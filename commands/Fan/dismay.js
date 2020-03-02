const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  message.delete(1);
  
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + 'Растроился(ась)')
        .setImage('http://img0.safereactor.cc/pics/post/Anime-haruchika-Anime-%D0%93%D0%B8%D1%84%D0%BA%D0%B8-%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%B3%D0%B8%D1%84%D0%BE%D0%BA-2746082.gif')
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал dismay " + forwrite);
  
};

module.exports.help =  {
  name: 'dismay'
}
