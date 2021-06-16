const Discord = require('discord.js');

module.exports = {
  name: 'birdtail',
  description: 'Bird Tail Cards information',

  async execute(message, args) {
    const birdtail = new Discord.MessageEmbed()
      .setColor('#EF476F')
      .setTitle('Bird Cards - Tail')
      .setDescription('Bird Tail Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/149200/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853721385012297789/bird_tail.png'
      );

    message.channel.send(birdtail);
  },
};
