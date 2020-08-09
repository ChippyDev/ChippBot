const Discord = require('discord.js');

module.exports = {
	name: 'soup',
	description: 'Display THE SOUP',
	execute(message, args) {
		const theSoup = new Discord.MessageAttachment('./the soup.jpg');
		message.channel.send(theSoup);
	},
};
