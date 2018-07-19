const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const prefix = '.'
   
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
  
client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('>bcall')){
 if (message.author.id !== '314845344313901057') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '314845344313901057') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت يا قلبي بس لا تطول');
  }
});

  
   
client.on("message", message => {
    if (message.content === ".games") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     َ  **-----Games Commands-----**
	 
  .rps : لعبة حجرة ورقة مقص
  .كف @user : يعطي كف للشخص الي منشنته
  .sara7a : لبدأ لعبة الصراحة
  .cuttweet : لبدأ لعبة كت تويت
  .marry : لعبة طلب الزواج من شخص , لازم تمنشن شخص تطلب يده
  .reverse (الكلام الي تبي تعكسه ) 
  .emoji : يحول كلامك لإيموجي
  .mention : لعبة منشن لي شخص 
  .kiss or اعطاء بوسة للشخص الي تمنشنو : .بوسة  
  
  **إنشاء الله سيتم إضافت أوامر أخرى**...
  
  رابط إضافة البوت :  https://goo.gl/VddrDM  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B
Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 

      client.on('message', message => {
     if (message.content === ".games") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#fffc00")
  .addField(" ** :white_check_mark:  Check DM |شيك على الخاص**", " Prince Bot ")

         
  message.channel.sendEmbed(embed);
    }
});
   
   client.on('message', message => {
     if (message.content === ".help") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#fffc00")
  .addField(" ** إختر نوع المساعدة **", " Prince Bot ")

  .addField(" .help-admin" كل الأوامر الإدارية مع التفاصيل, " Prince Bot ")
  .addField(" .help-games" كل الأوامر الخاصة بالألعاب مع التفاصيل, " Prince Bot ")
  .addField(" .help-music = كل الأوامر الخاصة بالميوزك مع التفاصيل", " Prince Bot ")

         
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
    if (message.content === ".help-admin") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     ** كل الأوامر الإدارية**
	 
	 
  .help : لمعرفت كل الأوامر
  .invite : لدعوة البوت لسرفرك
  .support : :gear:  للحصول على رابط سرفر الدعم الخاص بالبوت :gear: 
  .id : الأيدي حقك
  .croles : ينشأ لك كل الرتب وانت عدل على البرمشنات تبغها
  .roles : يعرض لك كل رتب السرفر بالترتيب
  .server : معلومات عن السرفر 
  .mute : إعطاء ميوت كتابي
  .unmute : إزالة الميوت
  .mutechannel : ميوت شانل
  .unmutechannel : فك الميوت عن الشانل
  .hchannel : يخفي الرووم يعني ولا احد يقدر يشوف الرووم
  .schannel : يزهر الرووم ويصير يقدر الكل يشوف الرووم
  .member : يعرض لك حالت كل اعشاء السيرفر
  .msgowner : لإرسال رسالة لصاحب السيرفر
  .clear : لحذف الشات  
  .addrole : لإنشاء رتبة بالسيرفر
  .ban : إعطاء بان 
  .kick : إعطاء كيك      
  .allbots : يعطيك كل البوتات الموجودة بسيرفرك
  .delete-cannels : لحذف كل الروومات الموجودة بالسيرفر
  .delet-roles : لحذف كل الرتب الموجودة بالسيرفر
  .invites : لمعرفت كم شخص جبته للسيرفر
  .bc : برودكاست يعني يرسل رسالة لكل اعضاء السيرفر  
  .sv-logo : لرأية شعار السرفر
  .member : لرأيت حالات كل أعضاء السرفر
  .ping : لرأية سرعة إتصال البوت
  .channelname : يغير إسم الرووم الي انت تكتب فيها
  .date : يعرض لك التاريخ

  
  
  إنشاء الله سيتم إضافت أوامر أخرى
  
  رابط إضافة البوت :  https://goo.gl/VddrDM 
  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B


Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 


   client.on("message", message => {
    if (message.content === ".help-games") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     ** كل الأوامر الألعاب**
	 
  .rps : لعبة حجرة ورقة مقص
  .كف @user : يعطي كف للشخص الي منشنته
  .sara7a : لبدأ لعبة الصراحة
  .cuttweet : لبدأ لعبة كت تويت
  .marry : لعبة طلب الزواج من شخص , لازم تمنشن شخص تطلب يده
  .reverse (الكلام الي تبي تعكسه ) 
  .emoji : يحول كلامك لإيموجي
  .report : اكتب هذا الامر و منشن الشخص الذي تبي تبلغ عليه وراح يرسل البوت رسالة لصاحب السيرفر
  .بوسة / .kiss : give someone kiss [New] 
  
  
  
  إنشاء الله سيتم إضافت أوامر أخرى
  
  رابط إضافة البوت :  https://goo.gl/VddrDM 
  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B


Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 
   
   
   
     client.on("message", message => {
    if (message.content === ".help-music") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
         .setFooter('Bot Owner : @The Prince#2981 ')
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
  
     ** مر الإدارية الميوزك**
	 
  .play ⇏ لتشغيل أغنية برآبط أو بأسم
  .skip ⇏ لتجآوز الأغنية الحآلية
  .pause ⇏ إيقآف الأغنية مؤقتا
  .resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
  .vol ⇏ لتغيير درجة الصوت 100 - 0
  .stop ⇏ لإخرآج البوت من الروم
  .np ⇏ لمعرفة الأغنية المشغلة حآليا
  .queue ⇏ لمعرفة قآئمة التشغيل 

  
  
  إنشاء الله سيتم إضافت أوامر أخرى
  
  رابط إضافة البوت :  https://goo.gl/VddrDM 
  
Our Discord Serveur For Support : https://discord.gg/DNJ8Q2B


Bot Owner : @The Prince#2981 | <@314845344313901057>

   `)
   message.author.sendEmbed(embed)
   
   }
   }); 

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("Speed Bot")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹  ولكم نورت السيرفر 🌹 
👑اسم العضو  ${member}👑  
انت العضو رقم ${member.guild.memberCount}`) 
}).catch(console.error)
});

client.on('message', msg => {

  if(msg.content.startsWith('.sug')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply('الرجاء كتابة الاقتراح')
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
      تم الاقتراح من قبل : ${msg.member}

      الاقتراح :
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('✅')
        message.react('❌')
      })
      }
    }

});

client.on('message',  (message) => {
        if(message.content.startsWith('.kiss')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let kiss = [
    'https://media.giphy.com/media/X9w8yR8kFwJMs/giphy.gif',
    'https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif',
    'https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif',
    'https://media.giphy.com/media/nzDez5n4biPGE/giphy.gif',
    'https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif',
    'https://media.giphy.com/media/3o8doT9BL7dgtolp7O/giphy.gif',
    'https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif',
    'https://media.giphy.com/media/dpSrm4cwUmCeQ/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} give you kiss ${user.username}! :punch:`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
        if(message.content.startsWith('.بوسة')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let kiss = [
    'https://media.giphy.com/media/X9w8yR8kFwJMs/giphy.gif',
    'https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif',
    'https://media.giphy.com/media/10UUe8ZsLnaqwo/giphy.gif',
    'https://media.giphy.com/media/nzDez5n4biPGE/giphy.gif',
    'https://media.giphy.com/media/108M7gCS1JSoO4/giphy.gif',
    'https://media.giphy.com/media/3o8doT9BL7dgtolp7O/giphy.gif',
    'https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif',
    'https://media.giphy.com/media/dpSrm4cwUmCeQ/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك بووووسه ${user.username}! :punch:`,
      image: {
        url: kiss[Math.floor(Math.random() * kiss.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

   client.on('message', message => {
     if (message.content === ".support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support **" , "  ** https://discord.gg/DNJ8Q2B  **")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

  client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`.help | Prince Bot `,` .invite | Prince Bot`,`.support | Prince Bot`,`.help | Prince Bot | ❤✨`,` Servers ${client.guilds.size} ` ,` Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});
  


client.on('message', message => {
  if (true) {
if (message.content === '.invite') {
      message.author.send(" ** تفضل هذا رابط إضافة البوت https://goo.gl/VddrDM **   "," Prince Bot ").catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **INVITE LINK : https://goo.gl/VddrDM **"," Prince Bot ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if (true) {
if (message.content === '.add') {
      message.author.send(" ** تفضل هذا رابط إضافة البوت https://goo.gl/VddrDM **   "," Prince Bot ").catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === ".add") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" **INVITE LINK : https://goo.gl/VddrDM **"," Prince Bot ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
	    var prefix = ".";
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["314845344313901057"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**انت صاحب البوت تم اثبات ملكية البوت لكـ**` + `:white_check_mark:`)
} else {
   message.reply('**انت لست صاحب البوت** ' + ':x:');   
}
}
});

client.on('message', message => {
		    var prefix = ".";
    if (message.author.bot) return;
            if(message.content.startsWith(prefix + 'avatar')) {

         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
        message.channel.send({files: [

        {
                       attachment: heg.displayAvatarURL,
           name : "logo.gif"
        }
    ]})
}
});



const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('.sara7a')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()
//By iFzx
   message.channel.sendEmbed(client);
   message.react("By iFzx")
 }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith(".cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By:  ' + message.author.username)
    }
});


client.on('message' , message => { 
		    var prefix = ".";
     if (message.content === prefix + "all-sv") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`__**مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}**__`)
         message.channel.sendEmbed(Embed11)
    }
});


client.on('message', message => {
			    var prefix = ".";
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(':new_moon_with_face: | اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField(':id: | ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});







client.on('message', message => {
    if(message.content == '.members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info
اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
ممنوع الازعاج:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
اصفر:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
قافلين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
الجميع:  ${message.guild.memberCount}**`)   
         message.channel.send({embed});
    }
});



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === ".unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


client.on('message', message => {
var prefix = "."
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لايوجد لديك ` BAN_MEMBERS ` صلاحية**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لدي صلاحيات لتبنيد العضو **");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).banable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});


client.on('message', message => {
  var prefix = ".";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('.reverse') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});



  client.on("message", message => {
    const prefix = "."
              
          if(!message.channel.guild) return;
   if(message.author.Prince) return;
      if(message.content === prefix + "sv-logo"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0xffffff)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', function(msg) {
         var prefix = "."
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
    if (message.content.startsWith(".stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


 
client.on('message', message => {
   if (message.content === ".roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});

client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = ".";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});

client.on('message', msg => {
  if (msg.content === 'فلسطين') {      
    msg.react("🇵🇸")
    msg.channel.send("🇵🇸")
  }
});






client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.content === '0ping') {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});


client.on('message', message => {
     if (message.content === "...bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(" **اسم السيرفر** ", message.guild.name)
  .addField(" **عدد السيرفرات الي فيها البوت:** " , client.guilds.size)
  .addField(" **المستخدمين:** ", client.users.size)
  .addField(" **قنوات:** ", client.channels.size)
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.--b*c')){
 if(!message.author.id === '314845344313901057') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {

  if (message.content.startsWith( 0 + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("314845344313901057").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });

   client.on('message', message => {
if (message.content.startsWith('0sug')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .addField(" **Done | تــــم :white_check_mark:**" , " ** تم إرسال الرسالة لصاحب البوت سنتطلع عليها قريبا  **")
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
                            const Premium = ['','']//ايديات السيرفرات اللي عندها بريميوم
                            if (message.content === "0premuim") {
                                if( Premium.some(word => message.guild.id.includes(word)) ) {

        message.channel.send('**ماني فاضي لك -_-**')

                                } else {
   message.channel.send('**Premium Only! 🙃**').then(message => {message.delete(1000)});
}
}

});



client.on('message', message =>{
    if(message.content == "role"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});


client.on('message', eyad =>{
      let args = eyad.content.split(" ").slice(2).join(" ")
      let men = eyad.mentions.users.first()
      let mas = eyad.author
      if(eyad.content.startsWith(0 + 'sar7')) {
          if(!args) return eyad.channel.send("`Usage: " + 0 + 'sar7 <@someone> <message>`');
          if(!men) return eyad.channel.send("`Usage: " + 0 + 'sar7 <@someone> <message>`');
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**
          <@${men.id}>
           لقد تم مصارحتك
           __${args}__
           **`)
    .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
          
          eyad.author.sendEmbed(embed)
                const Embed11 = new Discord.RichEmbed()
          .setColor("RANDOM")
                  .setAuthor(eyad.guild.name, eyad.guild.iconURL)
                  .setDescription(`لقد تم مصارحه العضو <@${eyad.author.id}>`)
  .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
       eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
      }
  });


client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('.bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Dragon";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



client.on("message",  message => {
    var prefix = ".";
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nickname')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("ضع الاسم")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('ضع الاسم').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("تم تغيير الاسم الى: " + changenick + "")
   }
}});



client.on('message', message => {
    if (message.content === ".croles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ec00d9", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ec0064", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#310b3f", permissions: [] })
                     message.guild.createRole({ name: "Staff", color: "#00deee", permissions: [] })
                     message.guild.createRole({ name: "Queen", color: "#f7008e", permissions: [] })
                     message.guild.createRole({ name: "Support", color: "#b8cf1a", permissions: [] })
                     message.guild.createRole({ name: "MVP+", color: "#ddf700", permissions: [] })
                     message.guild.createRole({ name: "MVP", color: "#00f7d9", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#07c740", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#75b167", permissions: [] })
                     message.guild.createRole({ name: "Active", color: "#bd9c11", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});

client.on('message', message => {
    if (message.content === ".rooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
     message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});


client.on('message', function(message) {
    const myID = "314845344313901057";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
                        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});


  client.on("message", message => {
    var prefix = "."; 
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "** :white_check_mark: Done | تــم**",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Prince Bot" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "314845344313901057") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('NDMyNjM4MzU3NDU4MTI0ODEz.Db5Mvg.HR0sFv_XjuyIDUz9trpqQkRkBmY');
        },3000);
    }
});
  

   client.on('message', message => {
     if (message.content === ".prince") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#fffc00")
  .addField(" **هلا انا برنس بوت بوت عربي شامل طبعا فريق البوت يشتغل على إضافة المزيد من الاوامر لإسعاددكم و مساعدتكم لإيجاد كل ما حتاجونه في بوتنا شكرا لإهتمامك بالبوت لإضافتي إلى سيرفرك اكتب .invite :heart:  **", " Prince Bot ")

         
  message.channel.sendEmbed(embed);
    }
});



 client.on('message', ReBeeL => {
  var prefix = ".";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "msgowner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** .bcowner <message> **")
                return;
                  }      
                   var rebel = new Discord.RichEmbed()
                      .setColor("#000000")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك 
${ReBeeL.guild.name}
الرسآلة 
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );

client.on('message', message => {
if (message.content.startsWith(".addrole")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
            }).then(function(role){
                message.member.addRole(role)
            })

}
});


client.on('message', msg => {
  if (msg.content === 'prince') {
    msg.reply('هلا انا برنس بوت بوت عربي شامل طبعا فريق البوت يشتغل على إضافة المزيد من الاوامر لإسعاددكم و مساعدتكم لإيجاد كل ما تحتاجونه في بوتنا شكرا لإحتمامك بالبوت لإضافتي إلى سيرفرك اكتب .invite :heart:  ');
  }
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ** ✅    تم ارسال الرابط على الخاص  **")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message',function(message) {
    let w = ['حجرة','ورقة','مقص'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( حجرة )
#2 ( ورقة )
#3 ( مقص )
\`\`\`

__**امامك  5 توان للاختيار**__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});


client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@432638357458124813>")) {
        ebnklb.channel.send('Hey Im **Prince Bot!**  A Nice Bot Developed By:`@The Prince#2981 `')
        ebnklb.channel.send('My Prefix `.`')

    }
});

client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith('.كف')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك كففف ${user.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

client.on('message', ra3d => {   
 if (ra3d.content.startsWith(".delete-cannels")) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠  لايوجد لديك صلاحية**');
     ra3d.guild.channels.forEach(c => { c.delete() })
                let embed = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('** تم حذف كل رومات السيرفر ✅ **')
           ra3d.author.sendEmbed(embed);
 }
 });


client.on('message', ra3d => {   
 if (ra3d.content.startsWith(".delet-roles")) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('**⚠  لايوجد لديك صلاحية**');
     ra3d.guild.roles.forEach(r => { r.delete() }) 
                let embed = new Discord.RichEmbed()
            .setColor('#fd0101')
            .setDescription('تم حذف كل الرتب بالسيرفر ✅')
           ra3d.author.sendEmbed(embed);
 }
 });

client.on("message", async message => {
           let args = message.content.split(' ').slice(1)
if(message.content.startsWith(prefix + 'channelname')) {
    if (!args) return message.reply("مرجو كتابت اسم  الجديد للقناة");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`الاسم الجديد ***${args}***`))
  .catch(console.error);
};
   });

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith(".bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO : Prince Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ . ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | The Prince')
    })
}
});

client.on('message', message => {
      if(message.content.startsWith (".marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 :bride_with_veil: :couple_mm:  بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية :timer: 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
});

client.on("guildCreate", guild => {
    let embed = new Discord.RichEmbed () 
    .setTitle('Bot Logs')
    .addField(' ***Bot joined to :***[' + `${guild.name}` + ']   **By : **' + `${guild.owner.user.username}` + '')
    .setFooter('The bot is happy')
    .setTimestamp()
    client.channels.get("464449492951760906").send(embed)
  });

  client.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed ()
  .setTitle('Bot Logs')
  .addField(' ***Bot left from :***[' + `${guild.name}` + ']     **By : **' + `${guild.owner.user.username}` +  ' ')
  .setFooter('The bot is crying')
  .setTimestamp()
  client.channels.get("464449492951760906").send(embed)
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**منشن الشخص الذي تريد التبليغ عنه و اكتب السبب**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
message.channel.send("__**هل أنت متأكد من أنك تريد إرسال هذا إلى صاحب السيرفر ؟؟**__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 10000 });
reaction1.on("collect", r => {
    `${message.guild.owner.send(Rembed)}`
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith(".ping")) {
    message.channel.sendMessage(`Pong ! \`${Date.now() - message.createdTimestamp} ms\`:watch:`);
    }
});



client.on('message', message => {

    if (message.content === ".mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === ".unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});


client.on('message', message => {
if(message.content == '.delete-all') {
client.guild.roles.forEach(r => {
r.delete()
})
client.guild.channels.forEach(c => {
c.delete
})
}
});

  client.on('message', message => {
if(message.content == '<@463779411070812180>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  

  client.on('message', message => {
if(message.content == '<@314845344313901057>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  client.on('message', message => {

    if (message.content === ".schannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: true
           }).then(() => {
               message.reply("تم اظهار الشات✅ ")
})
}
});

  
   client.on('message', message => {

    if (message.content === ".hchannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: false
           }).then(() => {
               message.reply("تم اخفاء الشات✅ ")
 })
}
});

client.on('message', message => {
    var prefix = "."
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});



 const mention = [
     'منشن لي شخص تحبه',
     'منشن لي شخص تكرهه',
     'منشن لي اقرب صديق لك',
     'منشن لي شخص قريب منك',
     'منشن لي البنت الي تحبها',
     'منشن لي الشخص الي تغار عليه',
     'منشن لي شخص تعتبره اخوك الاكبر',
     'منشن لي شخص يعجبك',
     'منشن لي شخص حاقد عليه',
     'منشن لي صاحب السيرفر',
     '‏منشن لي احسن إداري بالسيرفر',
     'منشن لي اغبا شخص بالسيرفر',
     '‏منشن لي اذكى شخص بالسيرفر',
     'منشن حبيبتك/حبيبك',
     'منشن لي شخص تبي تتعرف عليه',
     '‏منشن لي شخص ودك تقتله',
     'منشن لي برنس بوت',
     'منشن لي شخص ترتاح له',
     'منشن لي نفسك',
     '‏منشن لي اخر شخص كلمته بالخاص',
     'منشن لي شخص ما تكلمه',
     'منشن لي شخص ودك تسبه',
]

 client.on('message', message => {
   if (message.content.startsWith(".mention")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبة منشن شخص' ,
  `${mention[Math.floor(Math.random() * mention.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: The Prince  ' + message.author.username)
    }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('اهلين');
  }
});

client.on('message', msg => {
  if (msg.content === 'back') {
    msg.reply('ولكم');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('ولكم!');
  }
});



client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله تعالى وبركاته :heart: **');
  }
});
  
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
