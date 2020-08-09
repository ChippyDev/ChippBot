const Discord = require('discord.js');
const GoogleImages = require('google-images');

const rand1 = 180;
const rand2 = 0;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
	name: 'soup',
	description: 'Fetch a random soup image. Powered by google',
	execute(message, args) {
		const client = new GoogleImages('008164862876422939552:gizu6vqtgra', 'AIzaSyB4Qgm7lcMVT4IwvSPGlbGCqCpC-IDHG3o');

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
