const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`speedxcraft.com `,'https://www.youtube.com/?hl=FR');
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
var prefix = '-';

client.on('message', message => {
    if(message.content === prefix + 'CR') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "Raimbo",
                    color: "RANDOM",
                    permissions: []
     });

       client.on('ready', () => {
 setInterval(function(){roles.find('name', 'Raimbo').edit({color: 'RANDOM'}) 
   },100);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
