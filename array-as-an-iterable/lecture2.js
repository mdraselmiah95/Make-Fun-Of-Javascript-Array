/**
 * @title :Find Iterator from Array ✈️
 */

const arr = ["a", "b", "c", "d", "e"];

const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
