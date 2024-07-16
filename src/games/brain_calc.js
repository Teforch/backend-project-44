import getRandomNumber from '../getRandom.js';
import index from '../index.js';

export default () => {
  const welcome = () => {
    console.log('What is the result of the expression?');
  };

  const randomValues = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const char = Math.floor(Math.random() * 3);

    return [firstNumber, secondNumber, char];
  };

  const valueForQuestion = () => {
    let result;
    const randomValuess = randomValues();
    if (randomValuess[2] === 0) {
      result = `${randomValuess[0]} + ${randomValuess[1]}`;
    } else if (randomValuess[2] === 1) {
      result = `${randomValuess[0]} - ${randomValuess[1]}`;
    } else if (randomValuess[2] === 2) {
      result = `${randomValuess[0]} * ${randomValuess[1]}`;
    }
    return result;
  };

  const getCorrectAnswer = (expression) => {
    let result;

    const array = expression.split(' ');
    const num1 = parseFloat(array[0]);
    const num2 = parseFloat(array[2]);

    if (array[1] === '+') {
      result = num1 + num2;
    } else if (array[1] === '-') {
      result = num1 - num2;
    } else if (array[1] === '*') {
      result = num1 * num2;
    }
    return result;
  };

  index(valueForQuestion, getCorrectAnswer, welcome);
};
