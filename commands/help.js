const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	alt: ['commands'],
	usage: '[command]',
	description: 'Get help',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push("here's a list of all the commands");
			data.push(
				commands
					.filter((command) => !command.secret)
					.map((command) => command.name)
					.join(', ')
			);
			data.push(`\nYou can send \`${prefix}help [command name]\` to get help for a specific command`);

			/*
			return message.author
				.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply("you've been sent a DM will all the commands");
				})
				.catch((error) => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply("it seems like I can't DM you! Do you have DMs disabled?");
                });
            */

			return message.channel.send(data, { split: true });
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find((c) => c.alt && c.alt.includes(name));

		if (!command) {
			return message.reply("That's not a valid command");
		}

		data.push(`Name: ${command.name}`);
		if (command.alt) data.push(`Aliases: ${command.alt.join(', ')}`);
		if (command.description) data.push(`Description: ${command.description}`);
		if (command.usage) data.push(`Usage: ${prefix}${command.name} ${command.usage}`);

		message.channel.send(data, { split: true });
	},
};
