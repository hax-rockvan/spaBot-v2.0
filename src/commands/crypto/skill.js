const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'skill',
  description: 'Shows Current SKILL Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/cryptoblades')
      .then((res) => res.json())
      .then(async (skillData) => {
        const skill = await skillData;

        const skillEmbed = new Discord.MessageEmbed()
          .setTitle(skill.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/cryptoblades')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/15334/small/cryptoblade.PNG?1620596874'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current SKILL Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(skill.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(skill.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${skill.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(skill.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(skill.market_data.high_24h.php)}`
          );

        message.channel.send(skillEmbed);
      });
  },
};
