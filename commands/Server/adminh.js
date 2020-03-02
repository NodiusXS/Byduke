const Discord = module.require('discord.js');
const client = new Discord.Client();
//razrabs
var owners = ["274387828803239936"];
var owners = ["369234431904579585"];
//admins Byduke.Town
var owners = ["496530756437278740"];
//admins fulljito
var owners = ["466737106677530635"];
var owners = ["299955488903135232"];
var owners = ["405373126986432514"];
//admins Home
var owners = ["474864318236590113"];
var owners = ["512221629787668491"];
//admins Exom Games
var owners = ["335748862583111681"];
module.exports.run = async (client, message) => 
{   
    
    
    if(message.author.id = owners)
    {
    const embed = {
        "description": "Список команд и их описание...",
        "color": 109752,
        "author": {
            "name": "Byduke Admin Help"
        },
        "thumbnail": {
            "url": "https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png"
        },
        
        "fields":[
            {
                "name": "ban",
                "value": "Бан(@user)"       
            },
            {
                "name": "dm",
                "value": "ЛС(@user)(context)"       
            },
            {
                "name": "kick",
                "value": "Кик(@user)"       
            },
            {
                "name": "mute",
                "value": "Заглушить(@user)"       
            },
            {
                "name": "prefix",
                "value": "Замена префикса для вашего сервера"       
            },
            {
                "name": "unmute",
                "value": "Снять зглушение(@user)"       
            },
            {
                "name": "unwarn",
                "value": "Снять Предупреждение(@user)"       
            },
            {
                "name": "warn",
                "value": "Выдать предупреждение(@user)"       
            }
        ]
        }
        message.author.send({ embed });  
        console.log(message.author.tag + " написал команду /adminh положительно"); 
    }
    else{ const embed1 = {
        "description":"**Информация о пользователе**",
        "color": 109752,
        "fields":[
            {
                "name": `${message.author.username}`,
                "value": "Вы не являетесь Администратором!"       
            }],
        "thumbnail": {
            "url": "https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png"
        },
    }
        message.author.send({ embed1 });   
        console.log(message.author.tag + " написал команду /adminh отрицательно");
    }
}
module.exports.help = {
    name: "adminh"
}