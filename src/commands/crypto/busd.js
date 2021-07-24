const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'busd',
  description: 'Shows Current BUSD to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/binance-usd/')
      .then((res) => res.json())
      .then(async (busdData) => {
        const busd = await busdData;

        const busdEmbed = new Discord.MessageEmbed()
          .setTitle(busd.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/binance-usd')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/9576/small/BUSD.png?1568947766'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current BUSD to PHP Rate')

          .addField(
            'BUSD',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(busd.market_data.current_price.php),
            true
          )
          .addField(
            'Price Change Percentage 24h',
            `${busd.market_data.price_change_percentage_24h_in_currency.php} %`,
            true
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(busd.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',busd
                currency: 'PHP',
              }
            ).format(busd.market_data.high_24h.php)}`
          );

        message.channel.send(busdEmbed);
      });
  },
};