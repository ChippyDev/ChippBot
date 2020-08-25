const fs = require('fs');

module.exports = {
	name: 'test',
	alt: ['debug'],
	usage: '[debug content]',
	secret: true,
	description: 'A debugging command, only works for Chippy',
	execute(message, args) {
		if (message.author.id == '140752312040816640') {
			let cleanArgs = '';

			for (let a = 0; a < args.length; a++) {
				cleanArgs += args[a];
			}
			// console.log(cleanArgs);

			console.log(cleanArgs.indexOf('+'));
		}
	},
};
