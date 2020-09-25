//Tüm Hakları Saklıdır En Gelişmiş İstatistik Sistemi vardır.
//Yapımcısı : Fross Support Team
const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Fross Bot`, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/718909246774968341/720996993303838760/fross512.jpg")
      .addField(`**Fross İstatistik** `, `:small_orange_diamond: **Bellek kullanımı  :** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n:small_blue_diamond: **Kullanıcılar  :** ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n:small_orange_diamond: **Sunucular  :** ${client.guilds.size.toLocaleString()}\n:small_blue_diamond: **Kanallar  :** ${client.channels.size.toLocaleString()}\n:small_orange_diamond: **Discord.js sürüm :** v12.2.0\n:small_blue_diamond: **Ping  :** ${Math.round(client.ping)} ms \n\n:cyclone: **Version  :** 12.2.0\n\n              `)
      .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["istatiskik","i","info","bilgi","İ","İstatistik","İSTATİSTİK","İNFO","İnfo","Bilgi","BİLGİ","bot durum","Botdurum","botdurum","bi","Bi","Bİ"],
    permLevel: 4
  };

  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik'
  };
//Tüm Hakları Saklıdır En Gelişmiş İstatistik Sistemi vardır.
//Yapımcısı : Fross Support Team
