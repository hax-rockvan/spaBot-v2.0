const Discord = require('discord.js');

module.exports = {
  name: 'reminder',
  description: 'Post Important Reminders',

  async execute(message, args) {
    const reminder = new Discord.MessageEmbed()
      .setColor('#ffff3f')
      .setTitle('Important Reminder')
      .setDescription('Claim SLP June 19 - 10PM')
      .addFields(
        { name: 'Claim SLP', value: 'June 19 - 10PM' },
        { name: 'Refresh Bot', value: 'July 7' }
      );

    message.channel.send(reminder);
  },
};
