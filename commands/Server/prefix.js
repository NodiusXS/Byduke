const Discord = module.require('discord.js')
const fs = require('fs')
const client = new Discord.Client()

module.exports.run = async(client, message, args) =>
{
    message.delete(1);

if(!message.member.hasPermission("MANAGE_SERVER") ) return message.reply ("нет нет нет. ");
if(!args[0] || args[0 == "help"] ) return message.reply("Usage !prefix <desired prefix nere>");

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

prefixes [message.guild.id] = {
    prefixes: args [0]
};

fs.writeFile("./../prefixes.json",JSON.stringify(prefixes), (err) => {
 if (err) console.log(err)
})

let sEmbed = new Discord.RichEmbed
.setColor("#FF9900")
.setTitle("Prefix Set!")
.setDescription("HUG");

message.channel.send(sEmbed)
}

module.exports.help ={
name:"prefix"
}