const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setActivity('with SCIENCE!', { type: 'PLAYING' });
	console.log('Startup Complete!');
});

client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if (command.args && !args.length) {
		return message.channel.send("You didn't provide necessary arguments.");
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('<@140752312040816640> there was an error');
	}
});

client.login(token);

//https://discord.com/oauth2/authorize?client_id=740440940187222016&scope=bot