const fs = require('fs');

module.exports = {
	name: 'test',
	description: 'test',
	execute(message, args) {
		if (message.author.id == '140752312040816640') {
			fs.readFile('./users/Chippy.json', function(err, data) { 
				if (err) throw err; 
				const userdata = JSON.parse(data); 

				console.log(userdata.tag)
			});

			

		} else {
			console.log('TEST');
		}
	},
};
