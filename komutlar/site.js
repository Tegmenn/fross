//Tüm Hakları Saklıdır En Gelişmiş Link Sistemi vardır.
//Yapımcısı : Fross Support Team
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const link = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)

  .addField(`Fross | Bot Site Link`, `[Tıkla!](https://www.frossweb.tk/)`,)
  .setFooter(`© Tüm Hakları Saklıdır.`, client.user.avatarURL)
  console.log("Bildiri: .link komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(link);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['link'],
    permLevel: 0
  };

  exports.help = {
    name: 'site',
    description: 'Botun Ekleme Linkini Gösterir.',
    usage: 'link'
  };
//Tüm Hakları Saklıdır En Gelişmiş Link Sistemi vardır.
//Yapımcısı : Fross Support Team
