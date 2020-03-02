const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  message.delete(1);
  
  let dice = [ 1 , 2];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'https://i.gifer.com/FHGr.gif';
  var k2 = 'http://cdn-ak.f.st-hatena.com/images/fotolife/p/pema/20100504/20100504163253_original.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + ' побил(а) ' + forwrite)
        .setImage(gif)
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал bad " + forwrite);
  
};

module.exports.help =  {
  name: 'bad'
}
