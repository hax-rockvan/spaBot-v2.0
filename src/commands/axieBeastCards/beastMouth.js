const Discord = require('discord.js');

module.exports = {
  name: 'beastmouth',
  description: 'Beast Mouth Cards information',

  async execute(message, args) {
    const beastmouth = new Discord.MessageEmbed()
      .setColor('#FFD166')
      .setTitle('Beast Cards - Mouth')
      .setDescription('Beast Mouth Cards information')
      .setThumbnail(
        'https://cdn.coinranking.com/nft/0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d/175953.png?size=autox430'
      )
      .setImage(
        'https://media.discordapp.net/attachments/835962729202319404/853720158382981120/beast_mouth.png'
      );
    message.channel.send(beastmouth);
  },
};
