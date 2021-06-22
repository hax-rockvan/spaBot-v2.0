const Discord = require('discord.js');

module.exports = {
  name: 'mmr',
  description: 'Shows MMR SLP Rewards',

  async execute(message, args) {
    const mmr = new Discord.MessageEmbed()
      .setTitle('MMR SLP Rewards')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/835962729202319404/856923479998595082/Battle_SLP_rewards.png'
      );
    message.channel.send(mmr);
  },
};
