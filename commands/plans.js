const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "plans",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setTitle("💎 Minecraft Hosting Plans")
      .setColor("Gold")
      .setDescription(
        "**Basic Plan** - 2GB RAM - ₹100/month\n" +
          "**Pro Plan** - 4GB RAM - ₹250/month\n" +
          "**Premium Plan** - 8GB RAM - ₹500/month"
      )
      .setFooter({ text: "Choose your perfect hosting plan!" });

    message.channel.send({ embeds: [embed] });
  }
};
