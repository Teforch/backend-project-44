import readlineSync from 'readline-sync'
import getName from '../src/cli.js'

export default (valueForQuestion, getCorrectAnswer, welcome) => {
	console.log('Welcome to the Brain Games!')
	const userName = getName()
	console.log(`Hello, ${userName}!`)

	welcome()

	for (let i = 0; i < 3; i++) {
		const expression = valueForQuestion()
		console.log(`Question: ${expression}`)
		const usersAnswer = readlineSync.question('Your answer: ')

		const correctAnswer = getCorrectAnswer(expression)

		if (String(correctAnswer) === usersAnswer) {
			console.log('Correct!')
		} else {
			console.log(
				`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
			)
			console.log(`Let's try again, ${userName}`)
			return 0
		}
	}
	console.log(`Congratulations, ${userName}!`)
}
