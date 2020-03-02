const Discord = module.require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
module.exports.run = async (client,message,args) => 
{
  var msg = message.content;
  var forwrite = msg.substr(6);
  message.delete(1);
  
  let dice = [ 1 , 2 , 3 , 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let a_rand = dice[Math.floor(Math.random() * dice.length)];

  var k1 = 'http://img10.joyreactor.cc/pics/post/Anime-%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%B3%D0%B8%D1%84%D0%BA%D0%B0-blood-c-1384011.gif';
  var k2 = 'http://img10.joyreactor.cc/pics/post/Shirobako-toudou-misa-Anime-%D0%93%D0%B8%D1%84%D0%BA%D0%B8-Anime-1950384.gif';
  var k3 = 'https://data.whicdn.com/images/204652625/original.gif';
  var k4 = 'https://i.gifer.com/T3Iu.gif';
  var k5 = 'https://i.pinimg.com/originals/5a/80/6e/5a806e81c44f06b09b6b82d7d3421a44.gif';
  var k6 = 'https://i.pinimg.com/originals/0a/75/82/0a7582871494013337fc9604f8632eda.gif';
  var k7 = 'https://i.gifer.com/ENKr.gif';
  var k8 = 'https://i.gifer.com/8Q8C.gif';
  var k9 = 'http://images6.fanpop.com/image/photos/34900000/L-Lawliet-gif-anime-34965618-500-278.gif';
  var k10 = 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/cewekbangetfoto/original/2645_5-cara-pdkt-sama-cowok-lewat-instagram.gif';
  var k11 = 'https://i.gifer.com/7k5e.gif';
  var k12 = 'http://s018.radikal.ru/i521/1209/5d/78690bb6a16f.gif';
  var k13 = 'https://i.gifer.com/FDRg.gif';
  var k14 = 'https://e-shuushuu.net/images/2014-02-04-631997.gif';
  var k15 = 'https://you-anime.ru/uploads/2nNzwEy0I6fTfKmI.gif';
  
  if(a_rand == 1) {var gif = k1};
  if(a_rand == 2) {var gif = k2};
  if(a_rand == 3) {var gif = k3};
  if(a_rand == 4) {var gif = k4};
  if(a_rand == 5) {var gif = k5};
  if(a_rand == 6) {var gif = k6};
  if(a_rand == 7) {var gif = k7};
  if(a_rand == 8) {var gif = k8};
  if(a_rand == 9) {var gif = k9};
  if(a_rand == 10) {var gif = k10};
  if(a_rand == 11) {var gif = k11};
  if(a_rand == 12) {var gif = k12};
  if(a_rand == 13) {var gif = k13};
  if(a_rand == 14) {var gif = k14};
  if(a_rand == 15) {var gif = k15};

    let av = new Discord.RichEmbed()
    .setColor("#10c7e2")
    .setDescription((message.author) + 'coder' + forwrite)
    .setImage(gif)
    .setFooter('By Steel Brotherhood Studio © 2019','https://images-ext-1.discordapp.net/external/h-PFux1HwmnRzOK5nSY837l1aqCQrlXySERRVgDwisQ/https/images-ext-2.discordapp.net/external/syiDpPerunrEpmjmnyOolwJnPaT7HwlRMRqNEwEpIkM/https/cdn.discordapp.com/avatars/556715335890239509/5e5c2aefcfc1d3c77c0d15b93931e246.png');

  message.channel.send({embed: av});
  console.log(message.author.tag + " написал coder " + forwrite + a_rand);
  
};

module.exports.help =  {
  name: 'coder'
}