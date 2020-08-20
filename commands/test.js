const fs = require('fs');

module.exports = {
	name: 'test',
	alt: ['debug'],
	usage: '[debug content]',
	secret: true,
	description: 'A debugging command, only works for Chippy',
	execute(message, args) {
		if (message.author.id == '140752312040816640') {
			console.log(clean);
		}
	},
};
