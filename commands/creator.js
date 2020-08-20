module.exports = {
	name: 'creator',
	alt: ['maker'],
	description: 'Confirm that ChippBot was in fact made by Chippy!',
	execute(message, args) {
		message.channel.send('ChippBot was made by Chippy! who could of guessed?');
	},
};
