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

range("A".charCodeAt(0), "Z".charCodeAt(), 1).map((x) =>
  String.fromCharCode(x)
);

// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });

Array.of(7); //[7]
Array.of(1, 2, 3); //[1,2,3]
Array.of(undefined); //[undefined]

Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]

Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
