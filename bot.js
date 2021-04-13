const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const { prefix, token } = require('./config.json');
const keepAlive = require('./server');
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  // bot.user.setActivity('.help | Management', { type: 'Playing' });
  let idek = 0;
  idek++;
  console.log(`Updated ${idek}!`);
  let count = 0;
  function changeStatus() {
      let status = [`Members`, "Centrect's Stream", ".help | Centrect"]
      let type = ["WATCHING", "WATCHING", "PLAYING"];
      let random = status[count];
      let randomType = type[count];
      bot.user.setActivity(random, {type:randomType});
      count++;
      if (count == status.length || count == random.length) {
          count = 0;
      }
  }
  setInterval(changeStatus, 10000);
});



  bot.on("message", async msg => {

    if(msg.author.bot) return;
  
    let prefix = ".";
    let bicon = bot.user.displayAvatarURL;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (msg.content.startsWith(prefix)) {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        //cmd.slice(prefix.length)
        if(commandfile) commandfile.run(bot, msg, args);
      }
    }
  )

keepAlive();

bot.login(token);