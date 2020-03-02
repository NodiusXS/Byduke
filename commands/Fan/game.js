const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  message.delete(1);
  
  let dice = [ 1 , 2 , 3 , 4 , 5, 6, 7, 8];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'http://img0.joyreactor.cc/pics/post/Anime-Nichijou-Anime-%D0%93%D0%B8%D1%84%D0%BA%D0%B8-3287440.gif';
  var k2 = 'https://data.whicdn.com/images/245438461/original.gif';
  var k3 = 'https://steamuserimages-a.akamaihd.net/ugc/546391566366168002/9F6F5A9602E91B20C44B98E35DAC7405885F85E8/?imw=512&amp;imh=346&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';
  var k4 = 'https://i.gifer.com/N1hB.gif';
  var k5 = 'https://i.pinimg.com/originals/eb/ec/d4/ebecd4010e549f33371d741d46b9b607.gif';
  var k6 = 'https://s8.hostingkartinok.com/uploads/images/2017/09/416cd9c24741fc4bae5b34eb724a2b6d.gif';
  var k7 = 'https://anime-chan.me/uploads/posts/2015-01/1421109253_internet-2.gif';
  var k8 = 'https://i.gifer.com/MjqF.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  if(a_rand == 4) {var gif = k4};
  if(a_rand == 5) {var gif = k5};
  if(a_rand == 6) {var gif = k6};
  if(a_rand == 7) {var gif = k7};
  if(a_rand == 8) {var gif = k8};
  
  let av = new Discord.RichEmbed()
  .setColor("#10c7e2")
  .setDescription((message.author) + 'Играет' + forwrite)
  .setImage(gif)
  .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал game " + forwrite + a_rand);
  
};

module.exports.help =  {
  name: 'game'
}