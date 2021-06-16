const Discord = require('discord.js');

module.exports = {
  name: 'aquatichorn',
  description: 'Aquatic Horn Cards information',

  async execute(message, args) {
    const aquatichorn = new Discord.MessageEmbed()
      .setColor('#118AB2')
      .setTitle('Aquatic Cards - Horn')
      .setDescription('Aquatic Horn Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853716243369295922/aquatic_horn.png'
      );

    message.channel.send(aquatichorn);
  },
};
