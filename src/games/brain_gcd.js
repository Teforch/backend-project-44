import getRandomNumber from '../getRandom.js'
import index from '../index.js'

export default () => {
	const welcome = () => {
		console.log('Find the greatest common divisor of given numbers.')
	}

	const valueForQuestion = () => {
		const firstNumber = getRandomNumber()
		const secondNumber = getRandomNumber()

		return `${firstNumber} ${secondNumber}`
	}

	const getCorrectAnswer = (expression) => {
		let gcd

		const array = expression.split(' ')
		let num1 = parseInt(array[0])
		let num2 = parseInt(array[1])

		while (num1 != num2) {
			if (num1 > num2) {
				num1 = num1 - num2
			} else {
				num2 = num2 - num1
			}
		}
		gcd = num1
		return gcd
	}

	index(valueForQuestion, getCorrectAnswer, welcome)
}
