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
        { name: 'Rockvan', value: 'Borrowed 285.5205 BUSD' },
        { name: 'Imp', value: 'Pay 500php to Iohannes' },
        { name: 'Sexty', value: 'Pay 500php to Iohannes' },
        { name: 'SLP Claim Date', value: 'Aug 6th 2021, 10:01am' }
      );

    message.channel.send(reminder);
  },
};
