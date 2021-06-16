const Discord = require('discord.js');

module.exports = {
  name: 'birdback',
  description: 'Bird Back Cards information',

  async execute(message, args) {
    const birdback = new Discord.MessageEmbed()
      .setColor('#EF476F')
      .setTitle('Bird Cards - Back')
      .setDescription('Bird Back Cards information')
      .setThumbnail(
        'https://storage.googleapis.com/assets.axieinfinity.com/axies/149200/axie/axie-full-transparent.png'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853721349650251806/bird_back.png'
      );
    message.channel.send(birdback);
  },
};
