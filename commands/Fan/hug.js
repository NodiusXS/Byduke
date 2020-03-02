const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  message.delete(1);
  
  let dice = [ 1 , 2 , 3 , 4 , 5 ];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'https://i.gifer.com/HVKA.gif';
  var k2 = 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2016/7/25/57939fcabd04702f668b4701/5795dd4dbd0470dd2c8b47fb.gif';
  var k3 = 'https://pa1.narvii.com/6887/a24b49944f577c1c4d3b0ff7e85a64d6e5b89297r1-540-304_hq.gif';
  var k4 = 'https://69.media.tumblr.com/968760e65baa63fda72b784e6b56efb8/tumblr_o47obd5SP01sz111so1_540.gif';
  var k5 = 'https://pa1.narvii.com/6260/865f2c9043987eb5354f873f685dd9907b059462_hq.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  if(a_rand == 4) {var gif = k4};
  if(a_rand == 5) {var gif = k5};
  
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + 'Обнял(а)' + forwrite)
        .setImage(gif)
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал hug " + forwrite + a_rand);
  
};

module.exports.help =  {
  name: 'hug'
}