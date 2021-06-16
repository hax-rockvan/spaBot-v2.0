const Discord = require('discord.js');

module.exports = {
  name: 'birdmouth',
  description: 'Bird Mouth Cards information',

  async execute(message, args) {
    const birdmouth = new Discord.MessageEmbed()
      .setColor('#EF476F')
      .setTitle('Bird Cards - Mouth')
      .setDescription('Bird Mouth Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/149200/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853721374409359360/bird_mouth.png'
      );

    message.channel.send(birdmouth);
  },
};
