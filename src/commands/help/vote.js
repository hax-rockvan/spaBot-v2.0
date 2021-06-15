const Discord = require('discord.js');

module.exports = {
  name: 'vote',
  description: 'make a vote with 2 options',

  async execute(message, args) {
    const filter = (m) => m.author.id == message.author.id;
    let voteEmbed = new Discord.MessageEmbed().setFooter(
      `Vote Made By ${message.author.tag}`
    );

    message.channel.send('What is the Vote Topic?');
    try {
      let msg = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 35000,
        errors: ['time'],
      });
      console.log(msg.first().content);
      voteEmbed.setTitle(msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Vote time ran out, re-run command.');
    }

    message.channel.send('What is the first point to vote?');
    try {
      let msg = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 35000,
        errors: ['time'],
      });
      console.log(msg.first().content);
      voteEmbed.addField(`[🔴] Option 1:`, msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Vote time ran out, re-run command.');
    }

    message.channel.send('What is the Second point to vote?');
    try {
      let msg = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 35000,
        errors: ['time'],
      });
      console.log(msg.first().content);
      voteEmbed.addField(`[🔵] Option 2:`, msg.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send('Vote time ran out, re-run command.');
    }

    message.channel
      .send(voteEmbed)
      .then((sentMessage) => sentMessage.react('🔴'))
      .then((reaction) => reaction.message.react('🔵'));
  },
};
