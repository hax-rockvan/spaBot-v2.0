const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'meme',
  description: 'Posts a Random Meme',

  async execute(message, args) {
    fetch('https://meme-api.herokuapp.com/gimme')
      .then((res) => res.json())
      .then(async (json) => {
        const memeEmbed = new Discord.MessageEmbed()
          .setTitle(json.title)
          .setImage(json.url)
          .setFooter(`${json.subreddit} ${json.postLink}`);

        let msg = await message.channel.send('Looking for a random meme...');
        msg.edit(memeEmbed);
      });
  },
};
