import getRandomNumber from '../getRandom.js';
import index from '../index.js';

export default () => {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const welcome = () => {
    console.log('What number is missing in the progression?');
  };

  const valueForQuestion = () => {
    const initialValue = getRandomNumber();
    const amountOfNumbers = randomInteger(5, 10);
    const valueOfProgression = randomInteger(1, 10);
    const indexOfSecretValue = randomInteger(1, amountOfNumbers - 2);
    let str = '';

    for (let i = 1; i <= amountOfNumbers; i += 1) {
      if (i === indexOfSecretValue) {
        str += ' ..';
        i += 1;
      }

      str += ` ${initialValue + valueOfProgression * i}`;
    }
    return str.trim();
  };

  const getCorrectAnswer = (expression) => {
    const array = expression.split(' ');
    const indexOfSecretValue = array.indexOf('..');
    const valueOfProgression = Number(array[array.length - 1]) - Number(array[array.length - 2]);
    return array[indexOfSecretValue + 1] - valueOfProgression;
  };
  index(valueForQuestion, getCorrectAnswer, welcome);
};
