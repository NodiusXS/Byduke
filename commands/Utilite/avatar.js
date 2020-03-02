﻿const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let argsUser;
    if (member) argsUser = member.user;
    else argsUser = message.author;
  
		message.delete(1);
        	let av = new Discord.RichEmbed()
        	.setColor("#10c7e2")
        	.setDescription( 'Аватар' + argsUser)
        	.setImage(argsUser.avatarURL)
        	.setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
        
    
  		message.channel.send({embed: av});
	
  
  	
  console.log(message.author.tag + " написал avatar " + argsUser);
  
};

module.exports.help =  {
  name: 'avatar'
}
