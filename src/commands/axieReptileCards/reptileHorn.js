const Discord = require('discord.js');

module.exports = {
  name: 'reptilehorn',
  description: 'Reptile Horn Cards information',

  async execute(message, args) {
    const reptilehorn = new Discord.MessageEmbed()
      .setColor('#EF93FF')
      .setTitle('Reptile Cards - Horn')
      .setDescription('Reptile Horn Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/1733/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853722946484961290/reptile_horn.png'
      );

    message.channel.send(reptilehorn);
  },
};
