const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'List of All Available Bot Commands',

  async execute(message, args) {
    const help = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Bot Commands')
      .setDescription('List of All Available Bot Commands')
      .setThumbnail(
        'https://cdn.shopify.com/s/files/1/0013/5154/9043/products/naughtynursecostume1black_2048x3072_crop_center.progressive.png.jpg?v=1590109361'
      )
      .addFields(
        {
          name: 'Class Cards',
          value:
            '! + "ClassName" + "Part" (horn,mouth,back,tail) (ex. !birdhorn)',
        },
        {
          name: 'Adventure Guide',
          value: '!exp !levelguide !weakness',
        },
        {
          name: 'PVP Guide',
          value: '!mmr',
        },
        {
          name: 'Status Effects',
          value: '!buff !debuff',
        },
        {
          name: 'Crypto Currency',
          value: '!slp !axs !eth !usdt',
        },
        {
          name: '!meme',
          value: 'Generates a random meme',
        },
        {
          name: '!multi',
          value: 'Shows Multi Account Image',
        },
        {
          name: '!vote',
          value: 'Make a Two Option Vote',
        },
        {
          name: '!reminder',
          value: 'Shows IMPORTANT Reminders',
        }
      );

    message.channel.send(help);
  },
};
