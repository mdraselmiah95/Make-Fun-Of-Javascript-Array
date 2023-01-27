/**
 *@title :Array is an Object🔫
 */

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //Object
console.log(arr.constructor); //Function
console.log(arr.constructor.prototype); //[]

arr.test = "Test Property";
arr.log = function () {
  console.log(this);
  console.log(this.test);
  console.log(this.length);
  console.log(this[0]);
};
arr.log();

const obj = {};
console.log(typeof obj);

console.log(arr instanceof Array);
console.log(obj instanceof Array);
console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr) === "[object Array]");
console.log(Object.prototype.toString.call(arr));
