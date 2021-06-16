const Discord = require('discord.js');

module.exports = {
  name: 'beasttail',
  description: 'Beast Tail Cards information',

  async execute(message, args) {
    const beasttail = new Discord.MessageEmbed()
      .setColor('#FFD166')
      .setTitle('Beast Cards - Tail')
      .setDescription('Beast Tail Cards information')
      .setThumbnail(
        'https://cdn.coinranking.com/nft/0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d/175953.png?size=autox430'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853720170353655808/beast_tail.png'
      );

    message.channel.send(beasttail);
  },
};
