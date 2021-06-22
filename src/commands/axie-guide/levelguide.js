const Discord = require('discord.js');

module.exports = {
  name: 'levelguide',
  description: 'Shows Adventure Level Guide',

  async execute(message, args) {
    const levelguide = new Discord.MessageEmbed()
      .setTitle('Adventure Leveling Guide')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/835962729202319404/856922106520010752/Adventure_Leve_Guide.jpg'
      );
    message.channel.send(levelguide);
  },
};
