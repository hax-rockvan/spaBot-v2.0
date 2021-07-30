const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'usdc',
  description: 'Shows Current USDC to PHP Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/usd-coin')
      .then((res) => res.json())
      .then(async (usdcData) => {
        const usdc = await usdcData;

        const usdcEmbed = new Discord.MessageEmbed()
          .setTitle(usdc.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/usd-coin')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current USDC Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(usdc.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(usdc.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${usdc.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(usdc.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(usdc.market_data.high_24h.php)}`
          );

        message.channel.send(usdcEmbed);
      });
  },
};
