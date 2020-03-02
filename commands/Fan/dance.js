const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
	var msg = message.content;
	var forwrite = msg.substr(4);
	message.delete(1);
  
	let dice = [ 1 , 2 ];
	let a_rand = dice[Math.floor(Math.random() * dice.length)];
  
	var k1 = 'http://i.yapx.ru/FiMkR.gif';
	var k2 = 'http://img0.joyreactor.cc/pics/post/full/%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-Anime-Anime-%D0%93%D0%B8%D1%84%D0%BA%D0%B8-Kantai-Collection-1110334.gif';
  
	if(a_rand == 1) {var gif = k1};
	if(a_rand == 2) {var gif = k2};
	let av = new Discord.RichEmbed()
	.setColor("#10c7e2")
	.setDescription((message.author) + ' танцует')
	.setImage(gif)
	.setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
   
	message.channel.send({embed: av});
	console.log(message.author.tag + " написал dance");
  
};

module.exports.help =  {
  name: 'dance'
}
