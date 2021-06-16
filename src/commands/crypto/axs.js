const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'axs',
  description: 'Shows Current ETH to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/axie-infinity')
      .then((res) => res.json())
      .then(async (axsData) => {
        const axs = await axsData;

        const axsEmbed = new Discord.MessageEmbed()

          .setTitle(axs.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/axie-infinity')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png?1604471082'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current AXS to PHP Rate')

          .addField(
            'AXS',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(axs.market_data.current_price.php),
            true
          )
          .addField(
            'Price Change Percentage 24h',
            `${axs.market_data.price_change_percentage_24h_in_currency.php} %`,
            true
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(axs.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(axs.market_data.high_24h.php)}`
          );

        message.channel.send(axsEmbed);
      });
  },
};
