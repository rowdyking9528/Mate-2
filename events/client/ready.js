const { PREFIX } = require('../../config');
module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} servers`, `${totalUsers} Users`,`ROWDY KING 👑`,`https://mate-rowdyking.glitch.me` ], i = 0;
    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "STREAMING" }),5000)
  
};