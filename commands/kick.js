const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kick",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return message.reply("❌ No permission.");

    const user = message.mentions.members.first();
    if (!user) return message.reply("Mention a user.");

    const reason = args.slice(1).join(" ") || "No reason";
    await user.kick(reason);

    message.channel.send(`✅ Kicked ${user.user.tag} | Reason: ${reason}`);
  }
};
