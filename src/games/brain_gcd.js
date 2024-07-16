import index from '../index.js';

export default () => {
  const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const welcome = () => {
    console.log('Find the greatest common divisor of given numbers.');
  };

  const valueForQuestion = () => {
    const firstNumber = randomInteger(1, 100);
    const secondNumber = randomInteger(1, 100);

    return `${firstNumber} ${secondNumber}`;
  };

  const getCorrectAnswer = (expression) => {
    const array = expression.split(' ');
    let num1 = parseFloat(array[0]);
    let num2 = parseFloat(array[1]);

    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    const gcd = num1;
    return gcd;
  };

  index(valueForQuestion, getCorrectAnswer, welcome);
};
