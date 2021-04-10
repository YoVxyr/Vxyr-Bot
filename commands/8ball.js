const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let saying = ["Yes.", "No.", "Maybe.", "Probably not.", "Probably yes.", "Sorry g but nah.", "I don't know.", "I'm not sure about that.", "Last time I checked that wasn't true.", "Nah", "No you", "Cap🧢"]

    let result = saying[Math.floor(Math.random() * saying.length)];
    let question = args.join(" ");
    let icon = bot.user.displayAvatarURL;
    let embed = new Discord.MessageEmbed()
    .setAuthor("8ball", icon)
    .setThumbnail(icon)
    .setColor("#4169E1")
    .addField(question, result)
    .setFooter(`${msg.author.tag} | Centect's Bot`, icon)
    .setTimestamp();

    msg.channel.send(embed);
}

module.exports.help = {
  name:"8ball"
}