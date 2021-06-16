const Discord = require('discord.js');

module.exports = {
  name: 'bugtail',
  description: 'Bug Tail Cards information',

  async execute(message, args) {
    const bugtail = new Discord.MessageEmbed()
      .setColor('#d00000')
      .setTitle('Bug Cards - Tail')
      .setDescription('Bug Tail Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/448864/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853722250350690315/bug_tail.png'
      );

    message.channel.send(bugtail);
  },
};
