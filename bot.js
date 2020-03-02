const {Discord,Client,Collection,RichEmbed} = require("discord.js");
const client = new Client();
client.commands = new Collection();
//let configt = require('./config/token.json');
let configp = require('./config/prefix.json');
const fs = require('fs') 
//var token = configt;
let coins = require("./functions/coins.json");
let xp = require("./functions/exp.json");
client.login('token');

var prefix = configp;
//var owners = require('./config/owners.json');
//razrabs
let profile = require('./profile');
fs.readdir('./commands', (err, files) => { // commands
    if (err) console.log(err)

  
    files.forEach((element,iterator) => 
    {
        //check if element is a folder ? 
        //YES: -> open it and assign all js files to 'jsfiles' variable
        //NO:  -> assign js file to 'jsfiles' variable
        if(!element.includes("."))
        {
            fs.readdir(`./commands/${element}`,(err,sub_files)=>{
                sub_files.forEach((elem,iterator)=>{
                    let props = require(`./commands/${element}/${elem}`);
                    client.commands.set(props.help.name,props);
                    console.log(props);
                })
            }) 
        }
        else
        {
                let props = require(`./commands/${element}`);
             client.commands.set(props.help.name, props);
             console.log(props);
        }   
    }) 
  })

  
    client.on('ready', () => {
        
            console.log("    Бот включён")
         console.log("______________________")
        console.log("|    Byduke Bot       |")
        console.log("|                     |")
        console.log("| Version:0.1.20.11   |")
        console.log("|                     |")
        console.log("|   ADMINISTRATOR     |") 
        console.log("|_____________________|")        
        ;
        client.user.setGame('Test Update: v.0.1.20.11')
        client.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    client.setInterval(()=>{
        for(let i in client.mutes){
            let time = client.mutes[i].time;
            let guildid = client.mutes[i].guild;
            let guild = client.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete client.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)
});

client.on('message', async message =>     
{ 
  if(message.author.bot) return;
  if(message.channel.type == "dm") return message.reply("Извините, но я не отвечаю на личные сообщения `^-^`");
   
  //sql reg
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./functions/coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} Bycoins add...`);

  message.channel.send(coinEmbed);
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1,
      rep: 0
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor("#10c7e2")
    .addField("Новый Уровень", curlvl + 1);

    message.channel.send(lvlup);
  }
  fs.writeFile("./functions/exp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
/*========================================================================*/
    if(!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса 
    let args = messageArray.slice(1) //аргументы после команды
    let command_file = client.commands.get(command.slice(prefix.length)); // получение команды из коллекции
    if (command_file) command_file.run(client, message, args);
})

client.on("message",(message) => {          /*вызываем команду пинг(для разрабов)*/
    if(message.content == prefix + "ping")
    {
        message.channel.send("В данный момент Пинг "+`${Date.now() - message.createdTimestamp} ms`)
    };
});

    client.on("message", (message) => {//Отвечает игроку
        if(message.content == prefix + "Выдать") {
        if(message.member.permissions.has("MANAGE_ROLES")){
        let role = message.guild.roles.find(c => c.name === message.content.split(" ")[1])
        let user = message.mentions.members.first();
        user.addRole(role.id);
        message.channel.send("Пользователю была выдана роль!");
        console.log("Пользователю была выдана роль")
        } else {
        message.channel.send("Вы не имеете право выдавать роли!");
        console.log("Пользователь не имеет право выдавать роли!");
        }
        }
        });

client.on("message",(message)=>{
if(message.content == prefix + "install")
{
//-----------------------------
    let bot = client;
    //-----------------------------
    let server = bot.guilds.find(guild => guild.name);
    //-----------------------------
    let btroom = bot.channels.find(channel => channel.name === "bot_category"); 
    let btchan = bot.channels.find(channel => channel.name === "botchannel");
    //----------------------------
     console.log(message.author.id)
    if (message.author.id == owners || message.author.id == bot.user.id){
        if(!btchan&&!btroom){
            if(!btroom){server.createChannel(bot_category,'category')}else{btroom.delete(bot_category).then(server.createChannel(bot_category,'category'))}
            setTimeout(function () { 
                if(!btchan){server.createChannel(botchannel,'text')}else{btchan.delete(botchannel).then(server.createChannel(botchannel,'text'))} 
                parentchannel(bot,message)
            }, 1000)
        }else if(!btchan){
            setTimeout(function () { 
                server.createChannel(botchannel,'text')
                parentchannel(bot,message)
            }, 1000)       
        }else{
            setTimeout(function () { 
                if(btchan&&btroom){
                    btchan.delete(botchannel).then(server.createChannel(botchannel,'text'))
                    parentchannel(bot,message)
                }
            }, 1000) 
        }

        if(!btroom){
            server.createChannel(bot_category,'category')
            parentchannel(bot,message)
        }

    }else{
        message.author.send("```"+"```")
    }  
}


function parentchannel(bot,message) {
    setTimeout(function () {
        btchan = bot.channels.find(channel => channel.name === botchannel)
        btroom = bot.channels.find(channel => channel.name === bot_category)
        return btchan.setParent(btroom.id)
    }, 1500)


}});
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));