const crypto = require('crypto');

module.exports = {
	name: 'roll',
	alt: ['r'],
	usage: '<dice formula>',
	description: 'roll some dice! Defaults to 1d6',
	execute(message, args) {
		function cryptoRand(low, hi) {
			const maxRange = 4294967296;
			function getRandSample() {
				return crypto.randomBytes(4).readUInt32LE();
			}

			function unsafeCoerce(sample, range) {
				return sample % range;
			}
			function inExtendedRange(sample, range) {
				return sample < Math.floor(maxRange / range) * range;
			}

			const maxIter = 100;

			function rejectionSampling(range, inRange, coerce) {
				var sample;
				var i = 0;
				do {
					sample = getRandSample();
					if (i >= maxIter) {
						console.log('Too many iterations.');
					}
					i++;
				} while (!inRange(sample, range));
				return coerce(sample, range);
			}

			function getRandIntLessThan(range) {
				return rejectionSampling(Math.ceil(range), inExtendedRange, unsafeCoerce);
			}

			function getRand(low, hi) {
				if (low <= hi) {
					const l = Math.ceil(low);
					const h = Math.floor(hi);
					return l + getRandIntLessThan(h - l + 1);
				}
			}
			return getRand(low, hi);
		}

		let results = [];
		let die = [];
		let cleanArgs = '';

		for (let a = 0; a < args.length; a++) {
			cleanArgs += args[a];
		}

		console.log(cleanArgs);

		var dieraw = cleanArgs.split('d');
		console.log(dieraw);

		if (cleanArgs.length < 1) {
			dieraw = [1, 6];
		}

		die[0] = Math.max(0, Math.min(dieraw[0], 1000));
		die[1] = Math.max(0, Math.min(dieraw[1], 100000000));
		console.log(die);

		for (let k = 0; k < die[0]; k++) {
			results.push(` ${cryptoRand(1, die[1])}`);
		}

		if (results.toString().length < 2000) {
			if (results.length > 0) {
				message.channel.send(`${results.toString()}`, { split: true });
			} else {
				message.channel.send(`Thats not a number ${message.author.username}.`);
			}
		} else {
			message.channel.send('Output longer than 2000 characters, Discord cant handle that.');
		}
	},
};
