const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../../functions/coins.json");

module.exports.run = async (bot, message, args) => {
  
  message.delete(1);
  if(!coins[message.author.id]){
    return message.reply("Извени :( ... но у тебя ничего нет...")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Чуствуется нехватка Bycoinов!");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} передал ${pUser} ${args[1]} Bycoins.`);

  fs.writeFile("../../functions/coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });


}

module.exports.help = {
  name: "pay"
};