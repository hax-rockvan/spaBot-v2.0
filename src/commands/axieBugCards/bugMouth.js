const Discord = require('discord.js');

module.exports = {
  name: 'bugmouth',
  description: 'Bug Mouth Cards information',

  async execute(message, args) {
    const bugmouth = new Discord.MessageEmbed()
      .setColor('#d00000')
      .setTitle('Bug Cards - Mouth')
      .setDescription('Bug Mouth Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/448864/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853722237357916200/bug_mouth.png'
      );

    message.channel.send(bugmouth);
  },
};
