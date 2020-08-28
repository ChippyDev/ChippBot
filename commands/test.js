const fs = require('fs');

module.exports = {
	name: 'test',
	alt: ['debug'],
	usage: '[debug content]',
	secret: true,
	description: 'A debugging command, only works for Chippy',
	execute(message, args) {
		let x = 'happy'
		console.log(x[0])
	},
};
