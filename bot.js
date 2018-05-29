const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');

client.on('ready', () => {
            client.user.setGame(`speedxcraft.com`,'https://www.youtube.com/?hl=FR');
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === 'ايبي') {
    msg.reply('play.speedxcraft.com');
  }
});


client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('447512522128490533').roles.find('name', 'rainbow').edit({color: 'RANDOM'}) // {By !M,S..❤#0254}
    },100);
});

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('377989934897954816').roles.find('name', 'rainbow').edit({color: 'RANDOM'}) // {By !M,S..❤#0254}
    },100);
});

client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('play.speedxcraft.com');
  } 
});

client.on('ready', () => {
    setInterval(function(){ 
        client.guilds.get('369324885677309952').roles.find('name', 'rainbow').edit({color: 'RANDOM'}) // {By !M,S..❤#0254}
    },100);
}); 
client.on('message', msg => {
  if (msg.content === 'shop') {
    msg.reply('https://www.speedxcraft.com');
  }
});


client.on('message', msg => {
  if (msg.content === 'ويب') {
    msg.reply('https://www.speedxcraft.com');
  }
});

client.on('message', msg => {
  if (msg.content === 'web') {
    msg.reply('https://www.speedxcraft.com');
  }
});

client.on('message', msg => {
  if (msg.content === 'web') {
    msg.reply('موقعنا على الانترنت``speedxcraft.com``');
  }
});

var mcIP = 'play.speedxcraft.com'; 

client.on('message', message => {
    if (message.content === '-status') {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP ;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('فيه خطا ');
            }
            body = JSON.parse(body);
            var status = '*السيرفر طافي*';
            if(body.online) {
                status = '**السيرفر** **شغال**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** واحد بالسيرفر';
                } else {
                    status += '*ولا حدا بيلعب بالسيرفر*';
                }
            }
            message.reply(status);
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
