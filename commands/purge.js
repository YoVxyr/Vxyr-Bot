const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(`No permission.`);
    if (!args[0]) return msg.channel.send("Please specify how many messages to delete.");
    msg.channel.bulkDelete(args[0]).then(() => {
        msg.channel.send(`Cleared **${args[0]}** messages.`).then(msg => msg.delete(2000));
    });
}

module.exports.help = {
  name:"purge"
}