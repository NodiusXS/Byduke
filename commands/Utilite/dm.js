const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client, message,args) => 
{

	message.delete(1);
	message.mentions.members.first().send(message.content.substr(4));
	message.delete(1);
	console.log("member sent " + message.content.substr(4));		

}
module.exports.help = 
{
    name: "dm"
}