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
        { name: 'Imp', value: 'Pay 500php to Iohannes' },
        { name: 'Sexty', value: 'Pay 500php to Iohannes' },
        { name: 'Claim SLP', value: 'Jul 19th 2021, 12:23am' },
        { name: 'Refresh Bot', value: 'July 7' }
      );

    message.channel.send(reminder);
  },
};
