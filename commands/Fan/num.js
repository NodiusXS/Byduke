const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(4);
  
  let dice = [ 1 , 2 , 3 , 4];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
  var k1 = 'https://thumbs.gfycat.com/AnchoredBriskIcterinewarbler-size_restricted.gif';
  var k2 = 'https://steamuserimages-a.akamaihd.net/ugc/833577210843423741/BAA5CC10D853488A35E3A0FEC792DBD8EE562904/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';
  var k3 = 'https://i.gifer.com/Wf2F.gif';
  var k4 = 'https://i.gifer.com/OWoO.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  if(a_rand == 4) {var gif = k4};
  
  message.delete(1);
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + 'num num' + forwrite)
        .setImage(gif)
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал num " + forwrite + a_rand);
};

module.exports.help =  {
  name: 'num'
}