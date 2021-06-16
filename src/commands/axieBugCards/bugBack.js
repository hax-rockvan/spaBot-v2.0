const Discord = require('discord.js');

module.exports = {
  name: 'bugback',
  description: 'Bug Back Cards information',

  async execute(message, args) {
    const bugback = new Discord.MessageEmbed()
      .setColor('#d00000')
      .setTitle('Bug Cards - Back')
      .setDescription('Bug Back Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/448864/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853722218588274698/bug_back.png'
      );

    message.channel.send(bugback);
  },
};
