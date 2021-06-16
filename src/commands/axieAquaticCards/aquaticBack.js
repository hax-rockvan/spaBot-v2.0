const Discord = require('discord.js');

module.exports = {
  name: 'aquaticback',
  description: 'Aquatic Back Cards information',

  async execute(message, args) {
    const aquaticback = new Discord.MessageEmbed()
      .setColor('#118AB2')
      .setTitle('Aquatic Cards - Back')
      .setDescription('Aquatic Back Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853716221186932796/aquatic_back.png'
      );

    message.channel.send(aquaticback);
  },
};
