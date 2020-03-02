const Discord = module.require("discord.js");
const fs = require("fs");
let nekos = require('nekos.life');
let neko = new nekos();
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  message.delete(1);
  
  let dice = [ 1 , 2 , 3 , 4];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'http://img0.safereactor.cc/pics/post/Working%21%21-Anime-Taneshima-Popura-Takanashi-Souta-2469040.gif';
  var k2 = 'https://i.gifer.com/8TND.gif';
  var k3 = 'https://i.gifer.com/bD5.gif';
  var k4 = 'https://data.whicdn.com/images/250469502/original.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  if(a_rand == 4) {var gif = k4};
  
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + 'Поднял(ла),(лся),(лась)' + forwrite)
        .setImage(gif)
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал wakeup " + forwrite + a_rand);
};

module.exports.help =  {
  name: 'wakeup'
}