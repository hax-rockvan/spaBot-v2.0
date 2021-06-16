const Discord = require('discord.js');

module.exports = {
  name: 'aquaticmouth',
  description: 'Aquatic Mouth Cards information',

  async execute(message, args) {
    const aquaticmouth = new Discord.MessageEmbed()
      .setColor('#118AB2')
      .setTitle('Aquatic Cards - Mouth')
      .setDescription('Aquatic Mouth Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://cdn.discordapp.com/attachments/835962729202319404/853716262840303616/aquatic_mouth.png'
      );

    message.channel.send(aquaticmouth);
  },
};
