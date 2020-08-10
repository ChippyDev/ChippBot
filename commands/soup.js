const Discord = require('discord.js');
const GoogleImages = require('google-images');
const { GoogleAPI, GoogleSEI } = require('../config.json');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
	name: 'soup',
	description: 'Fetch a random soup image. Powered by google',
	execute(message, args) {
		const client = new GoogleImages(GoogleSEI, GoogleAPI);

		message.channel.send('Finding Soup...');

		client
			.search('Soup', { page: getRandomInt(180) })
			.then((images) => {
				const theSoup = new Discord.MessageAttachment(images[getRandomInt(10)].url);
				message.channel.send(theSoup);
			})
			.catch((err) => {
				console.error(err);
				message.channel.send('Error');
			});
	},
};
