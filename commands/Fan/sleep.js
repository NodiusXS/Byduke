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
  
	let dice = [ 1 , 2 ];
	let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
	var k1 = 'https://i.gifer.com/Tm0V.gif';
	var k2 = 'http://img1.joyreactor.cc/pics/post/Anime-%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-Nichijou-Anime-%D0%93%D0%B8%D1%84%D0%BA%D0%B8-867077.gif';
  
	if(a_rand == 1) {var gif = k1};
	if(a_rand == 2) {var gif = k2};
		
        let av = new Discord.RichEmbed()
        .setColor("#10c7e2")
        .setDescription((message.author) + 'уснул(ла)')
        .setImage(gif)
        .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  message.channel.send({embed: av});
  console.log(message.author.tag + " написал sleep " + forwrite);
};

module.exports.help =  {
  name: 'sleep'
}
