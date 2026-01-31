const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "announce",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return message.reply("❌ Admin only.");

    const msg = args.join(" ");
    if (!msg) return message.reply("❌ Provide announcement message.");

    const channel = message.guild.channels.cache.find(
      ch => ch.name === config.announcementChannel
    );

    if (!channel) return message.reply("❌ Announcement channel not found.");

    const embed = new EmbedBuilder()
      .setTitle("📢 Announcement")
      .setDescription(msg)
      .setColor("Purple");

    channel.send({ embeds: [embed] });
  }
};
