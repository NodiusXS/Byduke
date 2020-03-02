const Discord = module.require('discord.js');
const client = new Discord.Client();
module.exports.run = async (client, message) => 
{
    message.delete(1);
    const embed = {
        "description": "Список команд и их описание...",
        "color": 109752,
        "author": {
            "name": "Byduke Help"
        },
       "thumbnail": {
            "url": "https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png"
        },
        "fields":[
            {
                "name":"Bot",
                "value":"`devinfo` , `help` , `join`",
            },
            {
                "name":"Fan",
                "value":"`bad` , `code` , `dance` , `dismay` , `game` , `hug` , `kiss` , `kuss` , `ninja` , `num` , `owo` , `pat` , `poke` , `punch` , `rip` , `sleep` , `wakeup`",
            },
            {
                "name":"Music",
                "value":"`play`",
            },
            {
                "name":"Server",
                "value":"`adminh` , `ban` , `kick` , `mute` , `prefix` , `server` , `unmute` , `unwarn` , `warn`",
            },
            {
                "name":"User",
                "value":"`info` , `verify`",/*`rename`,*/
            },
            {
                "name":"Utilite",
                "value":"`achive` , `avatar` , `clear` , `dm` , `rand` , `say`",
            },
			{
                "name": "Economic",
                "value": "`coin` , `pay`"       
            }
			/*
            {
                "name": "/desc (Описание)(не работает)",
                "value": "Добавить описание в профиль"       
            },
            {
                "name": "/daily(не работает)",
                "value": "Получить ежедневную награду"       
            },
            {
                "name": "/hype (Balance, Bravery, Brilliance)(не работает)",
                "value": "Выбрать сторону для вашего игрока"       
            },
            {
                "name": "/top-(level, money)(не работает)",
                "value": "Топ 10 пользователей"       
            }*/
        ],
        
    }
    message.author.send({ embed });
    console.log(message.author.tag + " написал команду /help");    
};

module.exports.help = {
    name: 'help'
}