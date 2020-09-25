//Yapımcısı : Fross Support Team
const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`**__Fross™ Music'__**`, '\n:white_small_square: |++play = Belirtilen Müziği Oynatmayı Sağlar.\n:white_small_square: |++stop = Belirtilen Müziği Durdurmayı Sağlar.\n :white_small_square: |++skip = Sıradaki Müziğe Geçiş Yapar.\n:white_small_square: |++wait = Müziği Duraklatır.\n :white_small_square: |++join = Bot Odaya Girer.\n:white_small_square: |++start = Müziği Devam Ettirir.\n:white_small_square: |++ly = Çalan Şarkıyı Gösterir. \n:white_small_square: |++leave = Bot Odadan Ayrılır.')
  .setThumbnail("https://cdn.discordapp.com/attachments/718909246774968341/720996993303838760/fross512.jpg")
  .setFooter(`Fross™  - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Fross™  Bildirme: /müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik','müsic'],
    permLevel: 0
  };

  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };
//Yapımcısı : Fross Support Team
