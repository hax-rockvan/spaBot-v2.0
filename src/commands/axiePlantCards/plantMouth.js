const Discord = require('discord.js');

module.exports = {
  name: 'plantmouth',
  description: 'Plant Mouth Cards information',

  async execute(message, args) {
    const planthorn = new Discord.MessageEmbed()
      .setColor('#EF93FF')
      .setTitle('Plant Cards - Mouth')
      .setDescription('Plant Mouth Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/854600775070384148/plant_mouth.png'
      );

    message.channel.send(plantmouth);
  },
};
