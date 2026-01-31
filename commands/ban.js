const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ban",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return message.reply("❌ No permission.");

    const user = message.mentions.members.first();
    if (!user) return message.reply("Mention a user.");

    const reason = args.slice(1).join(" ") || "No reason";
    await user.ban({ reason });

    message.channel.send(`✅ Banned ${user.user.tag} | Reason: ${reason}`);
  }
};
