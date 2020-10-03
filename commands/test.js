const fs = require('fs');

module.exports = {
	name: 'test',
	alt: ['debug'],
	usage: '[debug content]',
	secret: true,
	description: 'A debugging command, only works for Chippy',
	execute(message, args) {
		let input = '';
		for (let loop = 0; loop < args.length; loop++) {
			input += args[loop];
		}

		/*
		switch (true) {
			case input <= 0:
				console.log('>=0');
				break;
			case input <= 2:
				console.log('>=2');
				break;
			case input <= 10:
				console.log('>=10');
				break;
			default:
				console.log('who knows!');
		}
		*/

		if (input <= 0) {
			console.log('>=0');
		} else if (input <= 2) {
			console.log('>=2');
		} else if (input <= 10) {
			console.log('>=10');
		} else {
			console.log('who knows!');
		}

		

	},
};
