
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  let totalSeconds = (bot.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  let icon = bot.user.displayAvatarURL;
  let embed = new Discord.MessageEmbed()
  .setAuthor("Bot Uptime", icon)
  .setThumbnail(icon)
  .setColor("#4169E1")
  .setDescription(`${uptime}`)
  .setFooter(`${msg.author.tag} | Centect's Bot`, icon)
  .setTimestamp();

  msg.channel.send(embed);
}


  

module.exports.help = {
  name:"uptime"
}