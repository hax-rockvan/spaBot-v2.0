const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'gala',
  description: 'Shows Current GALA Rate',

  async execute(message, args) {
    fetch('https://api.coingecko.com/api/v3/coins/gala')
      .then((res) => res.json())
      .then(async (galaData) => {
        const gala = await galaData;

        const galaEmbed = new Discord.MessageEmbed()

          .setTitle(gala.name)
          .setAuthor(
            'CoinGecko',
            'https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
          )
          .setURL('https://www.coingecko.com/en/coins/gala/php')
          .setThumbnail(
            'https://assets.coingecko.com/coins/images/12493/small/GALA-COINGECKO.png?1600233435'
          )
          .setTimestamp()
          .setFooter('To The Moon!')
          .setDescription('Current GALA Rate')

          .addField(
            'PHP',
            Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(gala.market_data.current_price.php),
            true
          )

          .addField(
            'EURO',
            Intl.NumberFormat('en-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(gala.market_data.current_price.eur),
            true
          )

          .addField(
            'Price Change Percentage 24h',
            `${gala.market_data.price_change_percentage_24h_in_currency.php} %`
          )
          .addField(
            '24h Low / 24h High',
            `${Intl.NumberFormat('en-PH', {
              style: 'currency',
              currency: 'PHP',
            }).format(gala.market_data.low_24h.php)} / ${Intl.NumberFormat(
              'en-PH',
              {
                style: 'currency',
                currency: 'PHP',
              }
            ).format(gala.market_data.high_24h.php)}`
          );

        message.channel.send(galaEmbed);
      });
  },
};
