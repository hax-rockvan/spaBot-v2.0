const Discord = require('discord.js');

module.exports = {
  name: 'reminder',
  description: 'Post Important Reminders',

  async execute(message, args) {
    const reminder = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Important Reminder')
      .addFields(
        { name: 'Claim SLP', value: 'July 3, 11:37 PM' },
        { name: 'Claim SLP', value: 'July 4, 12:28 PM' },
        { name: 'Refresh Bot', value: 'July 7' }
      );

    message.channel.send(reminder);
  },
};
