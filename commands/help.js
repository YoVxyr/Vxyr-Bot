const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let embed = new Discord.MessageEmbed()
    .setAuthor("Commands")
    .setColor("#4169E1")
    .addField(".8ball", `Randomly chooses a response to what ever you say.`)
    .addField(".uptime", `Shows you the bot uptime.`)
    .setFooter(`${msg.author.tag} | Centect's Bot`)
    .setTimestamp();
    msg.channel.send(embed);
  }




module.exports.help = {
name:"help"
}