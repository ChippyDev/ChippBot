const fs = require('fs');

module.exports = {
	name: 'test',
	description: 'test',
	execute(message, args) {
		if (message.author.id == '140752312040816640') {

			console.log(`${args[0]} ${args[1]} soup`)
			

		} else {
			console.log('TEST');
		}
	},
};
