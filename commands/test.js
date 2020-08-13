const fs = require('fs');

module.exports = {
	name: 'test',
	description: 'test',
	execute(message, args) {
		if (message.author.id == '140752312040816640') {
			
			console.log(clean);
		} else {
			console.log('TEST');
		}
	},
};
