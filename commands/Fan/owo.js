const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  
  let dice = [ 1 , 2 , 3];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'https://i.gifer.com/SCtD.gif';
  var k2 = 'https://i.gifer.com/7A2B.gif';
  var k3 = 'https://i.gifer.com/NmAy.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  
  message.delete(1);
  let av = new Discord.RichEmbed()
  .setColor("#10c7e2")
  .setDescription((message.author) + ' owo ' + forwrite)
  .setImage(gif)
  .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал owo " + forwrite);
  
};

module.exports.help =  {
  name: 'owo'
}