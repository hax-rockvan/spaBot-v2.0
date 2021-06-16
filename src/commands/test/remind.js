module.exports = {
  name: 'remind',
  description: 'Information about the arguments provided.',
  args: true,
  execute(message, args) {
    /*  const add = args[0]; */

    if (args[0] === 'add') {
      return message.channel.send('!remind add {reminder} ');
    }
    if (args[0] === 'remove') {
      return message.channel.send('!remind remove {reminder 1}');
    }

    message.channel.send(
      `Arguments: ${args}\nArguments length: ${args.length}`
    );
  },
};
