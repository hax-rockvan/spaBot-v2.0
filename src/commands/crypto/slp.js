const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'slp',
  description: 'Shows Current SLP to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/smooth-love-potion/')
      .then((res) => res.json())
      .then(async (slpData) => {
        const slp = await slpData;

        const slpEmbed = new Discord.MessageEmbed()
          .setTitle(slp.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/smooth-love-potion')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/10366/small/SLP.png?1578640057'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current SLP to PHP Rate')

          .addField(
            'SLP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(slp.market_data.current_price.php),
            true
          )
          .addField(
            'Price Change Percentage 24h',
            `${slp.market_data.price_change_percentage_24h_in_currency.php} %`,
            true
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(slp.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(slp.market_data.high_24h.php)}`
          );

        message.channel.send(slpEmbed);
      });
  },
};
