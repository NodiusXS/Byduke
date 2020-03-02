const Discord = module.require('discord.js');
const fs = require("fs");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    message.delete(1);
    let dice = [ 1, 2, 3, 4, 5, 6 ];
    let a_rand = dice[Math.floor(Math.random() * dice.length)];
    message.reply("Число: " + a_rand)
    console.log(message.author.tag + " написал команду /rand и ему выпало "+ a_rand);
}

module.exports.help = {
    name: "rand"
}