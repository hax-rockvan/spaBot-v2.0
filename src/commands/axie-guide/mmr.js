const Discord = require('discord.js');

module.exports = {
  name: 'mmr',
  description: 'Shows MMR SLP Rewards',

  async execute(message, args) {
    const mmr = new Discord.MessageEmbed()
      .setTitle('MMR SLP Rewards')
      .setThumbnail('https://miro.medium.com/max/2200/0*MSmp3gLEbtHbMloT.png')
      .setImage(
        'https://cdn.discordapp.com/attachments/857502138632110090/875238740228988958/New_Battle_Slp_Rewards.png'
      );
    message.channel.send(mmr);
  },
};
