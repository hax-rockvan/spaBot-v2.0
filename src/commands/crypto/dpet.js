const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'dpet',
  description: 'Shows Current DPET Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/my-defi-pet')
      .then((res) => res.json())
      .then(async (dpetData) => {
        const dpet = await dpetData;

        const dpetEmbed = new Discord.MessageEmbed()

          .setTitle(dpet.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/my-defi-pet/php')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/15321/small/mydefi.PNG?1620512455'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current DPET Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(dpet.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(dpet.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${dpet.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(dpet.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(dpet.market_data.high_24h.php)}`
          );

        message.channel.send(dpetEmbed);
      });
  },
};
