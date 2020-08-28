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
		let result = 1337;

		for (let loop = 0; loop < args.length; loop++) {
			input += args[loop];
		}
		console.log(`input: ${input}`);
		for (let loop = 0; loop < input.length; loop++) {
			if (numbers.indexOf(input[loop]) >= 0) {
				if (operatorFound == false) {
					firstOperand += input[loop];
					console.log(`number 1: ${firstOperand}`);
				} else {
					secondOperand += input[loop];
					console.log(`number 2: ${secondOperand}`);
				}
			} else if (operators.indexOf(input[loop]) >= 0) {
				if (operatorFound == false) {
					operator = operators.indexOf(input[loop]);
					operatorFound = true;
					console.log(`operator: ${operator} found: ${operatorFound}`);
				} else {
					switch (operator) {
						case 0:
							result = Number(firstOperand) + Number(secondOperand);
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
		}
		console.log(`result: ${result}`);
	},
};
