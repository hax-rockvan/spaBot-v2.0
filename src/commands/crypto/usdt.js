const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'usdt',
  description: 'Shows Current USDT to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/tether')
      .then((res) => res.json())
      .then(async (usdtData) => {
        const usdt = await usdtData;

        const usdtEmbed = new Discord.MessageEmbed()
          .setTitle(usdt.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/tether')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current USDT Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(usdt.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(usdt.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${usdt.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(usdt.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(usdt.market_data.high_24h.php)}`
          );

        message.channel.send(usdtEmbed);
      });
  },
};
