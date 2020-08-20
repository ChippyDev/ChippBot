const Discord = require('discord.js');
const GoogleImages = require('google-images');
const { GoogleAPI, GoogleSEI } = require('../config.json');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
	name: 'soup',
	usage: '<soup type>',
	description: 'Fetch a random soup image. Powered by google images',
	execute(message, args) {
		message.channel.send('Finding Soup...');

		try {
			if (args[0] == 'thesoup') {
				const theSoup = new Discord.MessageAttachment('./the soup.jpg');
				message.channel.send(theSoup);
			} else {
				const client = new GoogleImages(GoogleSEI, GoogleAPI);
				client
					.search(`${args[0]} Soup`, { page: getRandomInt(180) })
					.then((images) => {
						const theSoup = new Discord.MessageAttachment(images[getRandomInt(10)].url);
						message.channel.send(theSoup);
					})
					.catch((err) => {
						console.error(err);
						message.channel.send('Error');
					});
			}
		} catch (error) {
			console.log('Discord.js did a stupid');
			message.channel.send('<@140752312040816640> something stupid happend');
		}
	},
};
