module.exports = {
	name: 'math',
	usage: '[math]',
	secret: true,
	description: 'do math',
	execute(message, args) {
		var input = '';
		const numbers = '0123456789';
		const operators = '+-*/';

		let firstOperand = '';
		let operator = -1;
		let secondOperand = '';
		let operatorFound = false;
		let result = 0;

		for (let loop = 0; loop < args.length; loop++) {
			input += args[loop];
		}
		console.log(input);
		for (let loop = 0; loop < input.length; loop++) {
			if (numbers.indexOf(input[loop]) >= 0) {
				if ((operatorFound = false)) {
					firstOperand += input[loop];
					console.log(firstOperand);
				} else {
					secondOperand += input[loop];
					console.log(secondOperand);
				}
			} else if (operators.indexOf(input[loop]) >= 0) {
				if ((operatorFound = false)) {
					operator = operators.indexOf(input[loop]);
					operatorFound = true;
				} else {
					switch (operator) {
						case -0:
							console.log('error -0 operator');
							break;
						case 0:
							result = firstOperand + secondOperand;
							break;
						case 1:
						case 2:
						case 3:
							console.log('noodles');
					}
				}
			} else {
				console.log('its invalid!');
			}
			message.channel.send(result);
		}
	},
};
