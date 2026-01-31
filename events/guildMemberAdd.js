const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "guildMemberAdd",
  async execute(client, member) {
    const embed = new EmbedBuilder()
      .setTitle("🎉 Welcome to Our Minecraft Hosting!")
      .setDescription(
        `Hey ${member.user}, welcome!\n\n🌍 Server IP: **${config.serverIP}**`
      )
      .setColor("Green")
      .setFooter({ text: "Premium Minecraft Hosting Support" });

    member.guild.systemChannel?.send({ embeds: [embed] });
  }
};
