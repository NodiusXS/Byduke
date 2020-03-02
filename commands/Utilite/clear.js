const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (bot,message,args) => {
    try{
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
        if(args[0]>100) 
	{
		return 
		message.channel.send("Укажите значение меньше 100");
		console.log(message.author.tag + " написал команду /clear с значение больше 100");
        };
	if(args[0]<1) 
	{
		return 
		message.channel.send("Укажите значение больше 1");
		console.log(message.author.tag + " написал команду /clear с значение меньше 1");
	};
        if(1<args[0]<100)message.channel.bulkDelete(args[0]).then(() =>
        {
            message.channel.send(`Удалено ${args[0]} сообщений`).then(msg => msg.delete(15*1000));console.log(message.author.tag + ' написал команду /clear,было удалено '+ args[0] +' сообщений');
        });
	
    }
    	catch(err){
	message.channel.send("Ты можешь удалить только те сообщения которым меньше 14 дней");
        console.log(err.name);
    };
};

module.exports.help = 
{
    name: "clear"
};