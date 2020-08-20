const fs = require('fs');

module.exports = {
	name: 'science',
	usage: '<user>',
	description: 'Preform science! scientists only!',
	args: true,
	execute(message, args) {
		if (message.author.id == '140752312040816640') {
			const target = message.mentions.users.first();
			message.channel.send(`Science-ing ${target.username}`);
			message.channel.send(`Complete!`);

			fs.writeFile(`./users/${target.username}.json`, JSON.stringify(target), function (err) {
				if (err) throw err;
				console.log(`userdata saved`);
			});
		} else {
			message.reply('You are not qualified to perform science!');
		}
	},
};
