const Discord = require('discord.js');

module.exports = {
  name: 'aquatictail',
  description: 'Aquatic Tail Cards information',

  async execute(message, args) {
    const aquatictail = new Discord.MessageEmbed()
      .setColor('#118AB2')
      .setTitle('Aquatic Cards - Tail')
      .setDescription('Aquatic Tail Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/54152/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853716280972017674/aquatic_tail.png'
      );

    message.channel.send(aquatictail);
  },
};
