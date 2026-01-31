const axios = require("axios");
const { EmbedBuilder } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: "status",
  async execute(message) {
    const ip = config.serverIP;

    const res = await axios.get(`https://api.mcsrvstat.us/2/${ip}`);
    const data = res.data;

    const embed = new EmbedBuilder()
      .setTitle("🟢 Minecraft Server Status")
      .setColor(data.online ? "Green" : "Red")
      .addFields(
        { name: "Status", value: data.online ? "✅ Online" : "❌ Offline" },
        {
          name: "Players",
          value: data.online
            ? `${data.players.online}/${data.players.max}`
            : "N/A"
        },
        { name: "Server IP", value: ip }
      )
      .setFooter({ text: "Minecraft Hosting Bot" });

    message.channel.send({ embeds: [embed] });
  }
};
