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

		function doMath(operand, operand2, operator) {
			switch (operator) {
				case 0:
					result = Number(operand) + Number(operand2);
					break;
				case 1:
					result = Number(operand) - Number(operand2);
					break;
				case 2:
					result = Number(operand) * Number(operand2);
					break;
				case 3:
					result = Number(operand) / Number(operand2);
					break;
			}
			return result;
		}

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
					return;
				}
			} else {
				message.channel.send(`Invalid Character: ${input[loop]}`);
				return;
			}
		}
		if (operatorFound == false) {
			message.channel.send(input);
		} else {
			result = doMath(firstOperand, secondOperand, operator);
			message.channel.send(result);
			console.log(`result: ${result}`);
		}
	},
};
