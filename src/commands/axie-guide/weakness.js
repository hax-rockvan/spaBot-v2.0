const Discord = require('discord.js');

module.exports = {
  name: 'weakness',
  description: 'Shows Class Weakness Guide',

  async execute(message, args) {
    const weakness = new Discord.MessageEmbed()
      .setTitle('Class Weakness Guide')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/857502138632110090/861798854932430859/attach.png'
      );
    message.channel.send(weakness);
  },
};
