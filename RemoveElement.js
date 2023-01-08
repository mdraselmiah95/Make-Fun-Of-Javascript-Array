/**
 * @Title Remove a specific Element
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//* Remove First Element
numbers.shift();

//* Remove Last Element
numbers.pop();
numbers.length = numbers.length - 1;
// numbers.length--;

// numbers.splice(2, 2);

//* Remove Inside Elements -Splice using value
const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === toBeDeleted) {
    numbers.splice(i, 1);
  }
}

//* Filter Array
const toBeDeleted1 = 5;
newNumber = numbers.filter((item) => item !== toBeDeleted1);

// Reset Whole Array
let x = [1, 2, 3];
let y = x;
x = [];
console.log(x, y);

// Alternative
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0;
console.log(xx, yy);

//* Reset Whole Array while loop
while (numbers.length) numbers.pop();

console.log(numbers);
