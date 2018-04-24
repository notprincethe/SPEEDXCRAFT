const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');

client.on('ready', () => {
            client.user.setGame(`speedxcraft.com`,'https://www.youtube.com/?hl=FR');
    console.log('I am ready!');
});


client.on('message', msg => {
  if (msg.content === '-web') {
    msg.reply('موقعنا على الانترنت
'``speedxcraft.com``' 
              'تفضل بزيارتنا');
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

var prefix = "-";
var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
