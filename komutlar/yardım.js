//Yapımcısı : Fross Support Team
const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setAuthor(`Fross`, client.user.avatarURL)
      .setDescription("[Discord](https://discord.gg/Vx7WgUt) | [Bot Ekleme](https://top.gg/bot/709691892325023798) | [Site](http://www.frossweb.tk) \n ")
  .setColor(0x8e44ad)
  .setThumbnail(client.user.avatarURL)
  .addField(`Fross Yardım Komutları`, '\n:white_small_square: |+müzik =  Müzik Komutlarını Gösterir.\n:white_small_square: |+ping =  Botun Pingine Bakarsınız.\n:white_small_square: |+destek =  Destek Sunucusunun Linkine Bakarsınız.\n:white_small_square: |+site =  Botun Site Linkine bakarsın.\n:white_small_square: |+link =  Botun Ekleme Linkine bakarsın.\n :white_small_square: |+bilgi =  İstatislikleri Sadece Bot Sahibi Kullanabilir.\n:white_small_square: |+şikayet <Şikayetiniz> =  Herhangi Bir Sorun Olursa vb.\n:white_small_square: |+tavsiye <Tavsiyeniz> =  Bot Alakalı Tavsiyeniz Varsa vb.')
  .setFooter(`Fross™  - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Fross™  Bildirme: +yardım komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['help','yardm'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım menüsü',
    usage: 'yardım'
  };
//Yapımcısı : Fross Support Team
