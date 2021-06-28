const Discord = require('discord.js');

module.exports = {
  name: 'planttail',
  description: 'Plant Tail Cards information',

  async execute(message, args) {
    const planttail = new Discord.MessageEmbed()
      .setColor('#06D6A0')
      .setTitle('Plant Cards - Tail')
      .setDescription('Plant Tail Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/938367/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/854600784142401596/plant_tail.png'
      );

    message.channel.send(planttail);
  },
};
