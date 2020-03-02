const Discord = module.require('discord.js');
const client = new Discord.Client();
//var owners = require('../config/owners.json');
//razrabs
var owners = "509064920390828032";
module.exports.run = async (client, message,args) => 
{    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let argsUser;
    if (member) argsUser = member.user;
    
    var check;
    if(message.author.id == owners)
    {
        check = "Является разработчиком"
    }
    else
    {
        check = "Не является разработчиком"
    };
var chack;
    if(args[0] == owners)
    {
        chack = "Является разработчиком"
    }
    else
    {
        chack = "Не является разработчиком"
    };
	if(!args[0]){
    const embed = {
        "color": '16737843',
        "author": {
            "name": "Информация о пользователе"
        },
        "thumbnail": {
            "url": "https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png"
        },
        "footer":'By Steel Brotherhood Studio 2019'+'https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png',
        "fields": [
            {
                "name": `${message.author.username}`,
                "value": `${check}`
            }
        ]
        };
        message.author.send({ embed });
        console.log(message.author.tag + " написал команду /verify");    
    }
else{
const embed = {
        "color": '16737843',
        "author": {
            "name": "Информация о пользователе"
        },
        "thumbnail": {
            "url": "https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png"
        },
        "footer":'By Steel Brotherhood Studio 2019'+'https://images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png',
        "fields": [
            {
                "name": `${argsUser.username}`,
                "value": `${chack}`
            }
        ]
        };
        message.author.send({ embed });
        console.log(message.author.tag + " написал команду /verify" + argsUser.username);    
    };
}


module.exports.help = {
    name: "verify"
}