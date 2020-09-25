//Yapımcısı : Fross Support Team
const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Doğru Kullanım: +şikayet Bence bunu bunu eklerseniz daha iyi olur'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Şikayetiniz başarıyla bildirildi! İyi GÜNLER')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının şikayeti!:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('721102056307425311').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şikayet',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};
//Yapımcısı : Fross Support Team