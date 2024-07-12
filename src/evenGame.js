import readlineSync from 'readline-sync';
import getName from '../src/cli.js';
import getRandomNumber from '../src/getRandom.js';

export default () => {
	console.log('Welcome to the Brain Games!')
	const userName = getName()
	console.log(`Hello, ${userName}!`);

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	for (let i = 0; i < 3; i++) {
		const randomNumber = getRandomNumber();
		console.log(`Question: ${randomNumber}`);
		const usersAnswer = readlineSync.question('Your answer: ');

		let correctAnswer;
		if (randomNumber % 2 === 0) {
			correctAnswer = 'yes'
		} else {
			correctAnswer = 'no'
		}

		if (correctAnswer === usersAnswer) {
			console.log('Correct!');
		} else {
			console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
			console.log(`Let's try again, ${userName}`);
			return 0;
		}
	}
	console.log(`Congratulations, ${userName}`);
}