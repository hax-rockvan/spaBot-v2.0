const Discord = require('discord.js');

module.exports = {
  name: 'buff',
  description: 'Shows Buff Status Effects',

  async execute(message, args) {
    const buff = new Discord.MessageEmbed()
      .setTitle('Status Effect - Buffs')
      .setDescription(
        'Buffs are status effects which affect your Axies positively.'
      )
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/835962729202319404/853669474615033866/unknown.png'
      );
    message.channel.send(buff);
  },
};
