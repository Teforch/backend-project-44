import getRandomNumber from '../getRandom.js';
import index from '../index.js';

export default () => {
	const welcome = () => {
	console.log('What is the result of the expression?')
	}


const randomValues = () => {
	const firstNumber = getRandomNumber();
	const secondNumber = getRandomNumber();
	const char = Math.floor(Math.random() * 3);

	return [firstNumber, secondNumber, char];
}

const valueForQuestion = () => {
	let result;
	var random_values = randomValues()
	if (random_values[2] === 0) {
		result = `${random_values[0]} + ${random_values[1]}`
	} else if (random_values[2] === 1) {
		result = `${random_values[0]} - ${random_values[1]}`
	} else if (random_values[2] === 2) {
		result = `${random_values[0]} * ${random_values[1]}`
	}
	return result;
}

const getCorrectAnswer = (expression) => {
	let result;

	const array = expression.split(' ')
	const num1 = parseInt(array[0]);
	const num2 = parseInt(array[2]);
	
	if (array[1] === '+') {
		result = num1 + num2;
	} else if (array[1] === '-') {
		result = num1 - num2;
	} else if (array[1] === '*') {
		result = num1 * num2;
	}
	return result;
}



index(valueForQuestion, getCorrectAnswer, welcome)
}


