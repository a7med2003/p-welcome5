const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
var prefix = "-";


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('guildMemberAdd', member => {///كود الترحيب في السيرفر
  
  const channel = member.guild.channels.find(ch => ch.name === 'general');///اسم الشات
 
  if (!channel) return;

  channel.send(`**welcome:heart:️**${member}`);
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
