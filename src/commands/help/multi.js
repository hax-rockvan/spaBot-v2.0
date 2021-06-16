const Discord = require('discord.js');

module.exports = {
  name: 'multi',
  description: 'Multi Account Help',

  async execute(message, args) {
    const multi = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Multi Account')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/458900645970313216/853283460793499668/attach.png'
      );
    message.channel.send(multi);
  },
};
