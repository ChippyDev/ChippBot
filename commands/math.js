module.exports = {
	name: 'math',
	usage: '[math]',
	secret: true,
	description: 'do math',
	execute(message, args) {
		var input = '';
		const numbers = '0123456789.';
		const operators = '+-*/^';
		const notation = 'e';

		let firstOperand = '';
		let operator = -1;
		let secondOperand = '';
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
				case 4:
					result = Math.pow(Number(operand), Number(operand2));
			}
			return result;
		}

		for (let loop = 0; loop < args.length; loop++) {
			input += args[loop];
		}

		console.log(`input: ${input}`);

		for (let loop = 0; loop < input.length; loop++) {
			if (input[loop] == 'e') {
				if (operator < 0) {
					firstOperand += input[loop];
					loop++;
					firstOperand += input[loop];
					console.log(`number 1: ${firstOperand}`);
				} else {
					secondOperand += input[loop];
					loop++;
					secondOperand += input[loop];
					console.log(`number 2: ${secondOperand}`);
				}
			} else if (numbers.indexOf(input[loop]) >= 0) {
				if (operator < 0) {
					firstOperand += input[loop];
					console.log(`number 1: ${firstOperand}`);
				} else {
					secondOperand += input[loop];
					console.log(`number 2: ${secondOperand}`);
				}
			} else if (operators.indexOf(input[loop]) >= 0) {
				if (operator < 0) {
					operator = operators.indexOf(input[loop]);
					console.log(`operator: ${operator}`);
				} else {
					stepResult = doMath(firstOperand, secondOperand, operator);
					buffer = input.slice(loop);
					console.log(`pointer: ${input[loop]} loop: ${loop} buffer: ${buffer} input: ${stepResult + buffer}`);
					input = stepResult + buffer;
					firstOperand = '';
					operator = -1;
					secondOperand = '';
					loop = -1;
				}
			} else {
				message.channel.send(`Invalid Character: ${input[loop]}`);
				return;
			}
		}

		if (operator < 0) {
			message.channel.send(input);
		} else {
			result = doMath(firstOperand, secondOperand, operator);
			message.channel.send(result);
			console.log(`result: ${result}`);
		}
	},
};
