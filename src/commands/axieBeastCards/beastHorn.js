const Discord = require('discord.js');

module.exports = {
  name: 'beasthorn',
  description: 'Beast Horn Cards information',

  async execute(message, args) {
    const beasthorn = new Discord.MessageEmbed()
      .setColor('#FFD166')
      .setTitle('Beast Cards - Horn')
      .setDescription('Beast Horn Cards information')
      .setThumbnail(
        'https://cdn.coinranking.com/nft/0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d/175953.png?size=autox430'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853720146891243550/beast_horn.png'
      );

    message.channel.send(beasthorn);
  },
};
