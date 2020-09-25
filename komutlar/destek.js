//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Fross Support Team
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client,message, params) => {
  const destek = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Fross | Sunucu Linki`, ' https://discord.gg/XrAC6m')
  .setFooter(`© Fross Tüm Hakları Saklıdır.`, client.user.avatarURL)
  console.log("Bildiri: .destek komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(destek);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destek','support'],
    permLevel: 0
  };

  exports.help = {
    name: 'destek',
    description: 'Botun Destek Linkini Gösterir.',
    usage: 'destek'
  };
//Tüm Hakları Saklıdır En Gelişmiş destek Sistemi vardır.
//Yapımcısı : Fross Support Team
