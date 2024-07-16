import getRandomNumber from '../getRandom.js';
import index from '../index.js';

export default () => {
  const welcome = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  };

  const getCorrectAnswer = (expression) => {
    let correctAnswer;
    if (expression % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return correctAnswer;
  };

  const valueForQuestion = () => {
    const randomNumber = getRandomNumber();
    return randomNumber;
  };

  index(valueForQuestion, getCorrectAnswer, welcome);
};
