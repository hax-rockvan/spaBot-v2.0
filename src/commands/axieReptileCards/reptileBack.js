const Discord = require('discord.js');

module.exports = {
  name: 'reptileback',
  description: 'Reptile Back Cards information',

  async execute(message, args) {
    const reptileback = new Discord.MessageEmbed()
      .setColor('#EF93FF')
      .setTitle('Reptile Cards - Back')
      .setDescription('Reptile Back Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853722935826579456/reptile_back.png'
      );

    message.channel.send(reptileback);
  },
};
