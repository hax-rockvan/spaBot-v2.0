const Discord = require('discord.js');

module.exports = {
  name: 'planthorn',
  description: 'Plant Horn Cards information',

  async execute(message, args) {
    const planthorn = new Discord.MessageEmbed()
      .setColor('#06D6A0')
      .setTitle('Plant Cards - Horn')
      .setDescription('Plant Horn Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/938367/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/854600764563652638/plant_horn.png'
      );

    message.channel.send(planthorn);
  },
};
