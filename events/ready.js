module.exports = {
  name: "ready",
  execute(client) {
    console.log(`✅ Bot Logged in as ${client.user.tag}`);
  }
};
