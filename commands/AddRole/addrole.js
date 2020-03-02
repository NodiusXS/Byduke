const {Discord,Client,Collection,RichEmbed} = require("discord.js");
const fs = require("fs");
const client = new Client();
client.commands = new Collection();
module.exports.run = async (client,message,args) => 
{

	if(message.author.bot)  
    {
        if(message.embeds)
        {  
            const embedMsg = message.embeds.find(msg => msg.title == 'Server Roles');
            if(embedMsg)
            {

                message.react('647193387514069022')
                //.then(reaction => reaction.message.react(''))
                .catch(err => console.error);
            }
        }
        return;
    }

    if(message.content.toLowerCase() === '/addrole')
    {
            const embed = new RichEmbed();
            embed.setColor("#10c7e2");
            embed.setTitle("Server Roles");
            embed.setDescription("<:Tester:647193387514069022> - Тестер");
            embed.setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');
            message.channel.send({embed: embed});
    };
    
    client.on('messageReactionAdd',(reaction,user) => {
        if(user.bot)
			return;
		var roleName = reaction.emoji.name;
		var role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
        var member = reaction.message.guild.members.find(member => member.id === user.id);
            
        member.addRole(role.id).then(member =>{
            console.log("Added" + member.user.username + " to a role.")
        }).catch(err => console.error);
            
    });
};

module.exports.help =  {
  name: 'addrole'
}
