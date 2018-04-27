const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');

client.on('ready', () => {
            client.user.setGame(`speedxcraft.com`,'https://www.youtube.com/?hl=FR');
    console.log('I am ready!');
});

client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  '-color 100') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', msg => {
  if (msg.content === '-web') {
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
                status = '**سيرفرك** **شغال**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** واحد بالسيرفر';
                } else {
                    status += '*ولا حدا بلعب بالسيرفر*';
                }
            }
            message.reply(status);
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
