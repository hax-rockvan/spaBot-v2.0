const Discord = require('discord.js');

module.exports = {
  name: 'plantback',
  description: 'Plant Back Cards information',

  async execute(message, args) {
    const plantback = new Discord.MessageEmbed()
      .setColor('#06D6A0')
      .setTitle('Plant Cards - Back')
      .setDescription('Plant Back Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/938367/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/854600755427147787/plant_back.png'
      );

    message.channel.send(plantback);
  },
};
