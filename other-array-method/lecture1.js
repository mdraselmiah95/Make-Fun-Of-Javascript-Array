/**
 * @title :Static Methods vs Instance Methods 🏇
 */

const arr = [];
// arr.concat();  Instance Method
// Array.from();  Static Method

// TODO: Example of Javascript Static Method
// Array.from()
const s = Array.from("Stack Learner");
console.log(s);

const set = new Set(["foo", "Bar", "foo", "Bar"]);
const s1 = Array.from(set);
console.log(s1);

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);

Array.from(mapper.values()); // ["a", "b"]

Array.from(mapper.keys()); // ["1", "2"]

function f() {
  return Array.from(arguments);
}

f(1, 2, 3, 4, 5); // [1,2,3,4,5]

Array.from([1, 2, 3], (x) => x * x);

Array.from({ length: 5 }, (v, i) => i * 2);

const range = (start, stop, step) => {
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
};

range(0, 4, 1); // [0,1,2,3,4]

range(1, 10, 2); // [0,1,,3,5,7,9]

// 8:12
