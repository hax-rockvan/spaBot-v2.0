const Discord = require('discord.js');

module.exports = {
  name: 'planttail',
  description: 'Plant Tail Cards information',

  async execute(message, args) {
    const planttail = new Discord.MessageEmbed()
      .setColor('#EF93FF')
      .setTitle('Plant Cards - Tail')
      .setDescription('Plant Tail Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/854600784142401596/plant_tail.png'
      );

    message.channel.send(planttail);
  },
};
