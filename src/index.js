const fs = require('fs');
const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const PREFIX = process.env['PREFIX'];
const BOT_TOKEN = process.env['BOT_TOKEN'];

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./src/commands');

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./src/commands/${folder}`)
    .filter((file) => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.once('ready', () => {
  console.log('spaBot is Ready!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    return message.channel.send(
      `You didn't provide any command, ${message.author}!`
    );
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});

client.login(BOT_TOKEN);
