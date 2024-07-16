import getRandomNumber from '../getRandom.js';
import index from '../index.js';

export default () => {
  const welcome = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  };
  const valueForQuestion = () => getRandomNumber();

  const getCorrectAnswer = (expression) => {
    for (let i = 2; i < expression; i += 1) {
      if (expression % i === 0) return 'no';
    }
    return 'yes';
  };

  index(valueForQuestion, getCorrectAnswer, welcome);
};
