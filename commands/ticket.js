const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "ticket",
  async execute(message) {
    const channelName = `ticket-${message.author.username}`;

    if (
      message.guild.channels.cache.find(ch => ch.name === channelName)
    ) {
      return message.reply("❌ You already have an open ticket.");
    }

    const staffRole = message.guild.roles.cache.find(
      r => r.name === config.staffRole
    );

    const channel = await message.guild.channels.create({
      name: channelName,
      type: 0,
      permissionOverwrites: [
        {
          id: message.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: message.author.id,
          allow: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: staffRole.id,
          allow: [PermissionsBitField.Flags.ViewChannel]
        }
      ]
    });

    const embed = new EmbedBuilder()
      .setTitle("🎫 Support Ticket Created")
      .setDescription("Support will help you soon.")
      .setColor("Blue");

    channel.send({ embeds: [embed] });
    message.reply(`✅ Ticket created: ${channel}`);
  }
};
