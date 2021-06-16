const Discord = require('discord.js');

module.exports = {
  name: 'exp',
  description: 'Adventure Experience Guide',

  async execute(message, args) {
    const exp = new Discord.MessageEmbed()
      .setTitle('Adventure Experience Guide')

      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/835962729202319404/854085115537260574/experience_guide.png'
      );

    message.channel.send(exp);
  },
};
