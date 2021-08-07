const Discord = require('discord.js');

module.exports = {
  name: 'reminder',
  description: 'Post Important Reminders',

  async execute(message, args) {
    const reminder = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Important Reminder')
      .addFields(
        { name: 'Iohannes', value: 'Borrowed 0.0023 WETH' },
        { name: 'Iohannes', value: 'Give Ariston Sword Commission' },
        { name: 'Rockvan', value: 'Borrowed 200.5205 BUSD' },
        { name: 'Rockvan', value: 'Treat Iohannes at SB' },
        { name: 'Sexty', value: 'Pay 160 to rockvan' },
        { name: 'SLP Claim Date', value: 'August 20, 10:50 PM' }
      );

    message.channel.send(reminder);
  },
};
