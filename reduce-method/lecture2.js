/**
 * @title :Anatomy of Reduce Method🎊
 *
 */

//* Accumulate - gather together or acquired an increasing number or quantity of

const numbers = [1, 2, 3, 4, 5, 6];

function sunFunc(accumulator, currentValue, index) {
  console.log(`Index ${index} - Acc ${accumulator} - Cur ${currentValue}`);
  return accumulator + currentValue;
}

const sum = numbers.reduce(sunFunc, 0); // last argument initialValue=0
console.log(sum);
