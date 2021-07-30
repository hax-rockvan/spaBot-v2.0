const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'xrp',
  description: 'Shows Current XRP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/ripple')
      .then((res) => res.json())
      .then(async (xrpData) => {
        const xrp = await xrpData;

        const xrpEmbed = new Discord.MessageEmbed()
          .setTitle(xrp.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/xrp')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png?1605778731'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current XRP Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(xrp.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(xrp.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${xrp.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(xrp.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(xrp.market_data.high_24h.php)}`
          );

        message.channel.send(xrpEmbed);
      });
  },
};
