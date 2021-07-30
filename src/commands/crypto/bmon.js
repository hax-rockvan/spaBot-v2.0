const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'bmon',
  description: 'Shows Current BMON to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/binamon')
      .then((res) => res.json())
      .then(async (bmonData) => {
        const bmon = await bmonData;

        const bmonEmbed = new Discord.MessageEmbed()
          .setTitle(bmon.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/binamon')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/16346/small/token-symbol.png?1623774822'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current BMON to PHP Rate')

          .addField(
            'BMON',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(bmon.market_data.current_price.php),
            true
          )
          .addField(
            'Price Change Percentage 24h',
            `${bmon.market_data.price_change_percentage_24h_in_currency.php} %`,
            true
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(bmon.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(bmon.market_data.high_24h.php)}`
          );

        message.channel.send(bmonEmbed);
      });
  },
};
