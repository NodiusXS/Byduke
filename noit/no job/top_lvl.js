const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    con.query(`SELECT userid, money, level FROM users ORDER BY level DESC LIMIT 10`, (err, res) => {
        var embed = new Discord.RichEmbed()
            .setAuthor(`Uni`, message.guild.iconURL)
            .setColor(0xff6633)
            .addField("Таблица лидеров", "По уровню");
            res.forEach((item, i) => {
                if (item.level != 0) embed.addField(`${i}. ${client.users.get(item.userid).tag}`, item.level)
            })
        message.channel.send({embed});
    });
}

module.exports.help = {
    name: "top-level"
}