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
