const Discord = require('discord.js');
const GoogleImages = require('google-images');
const { GoogleAPI, GoogleSEItoby } = require('../config.json');
const fs = require('fs');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
	name: 'toby',
	usage: '[toby type]',
	description: 'Fetch a random image of Toby Maguire. Powered by google images',
	execute(message, args) {
		message.channel.send('Finding Toby Maguire...');

		let extra = ``;
		if (typeof args[0] == 'string') {
			extra = args[0];
		}

		try {
			const client = new GoogleImages(GoogleSEItoby, GoogleAPI);
			client
				.search(`${extra} Tobey Maguire`, { page: getRandomInt(50) })
				.then((images) => {
					const picture = new Discord.MessageAttachment(images[getRandomInt(10)].url);
					message.channel.send(picture);
				})
				.catch((error) => {
					console.log(error);
					message.channel.send('Could not find a valid Toby');
				});
		} catch (error) {
			console.log('Discord.js did a stupid');
			message.channel.send('<@140752312040816640> something broke... again.');
		}
	},
};
