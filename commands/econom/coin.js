const Discord = require("discord.js");
let coins = require("../../functions/coins.json");

const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  //!coins
  message.delete(1);
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let Bykon = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", Bykon + " ByCoin");

  message.channel.send(coinEmbed);

}

module.exports.help = {
  name: "coin"
};