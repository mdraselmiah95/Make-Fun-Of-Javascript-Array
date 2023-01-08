/**
 * @Title Add New Element
 */

const arrP1 = [1, 2, 3, 4];
const arrP2 = [8, 9];
arrP1[arrP1.length] = 5;
arrP1.push(6);
arrP1.push(7, 8);
arrP1.push(...arrP2);
// Array.prototype.push.apply(arrP1, arrP2);

// console.log(arrP1);

//* Use unshift to insert at the beginning
const arrU1 = [5, 6, 7, 8];
const arrU2 = [1, 2, 3];
arrU1.unshift(4);
arrU1.unshift(...arrU2);
// Array.prototype.unshift.apply(arrU1, arrU2);
// console.log(arrU1);

//* Use Splice to insert at the given index
const arrS1 = [1, 2, 4, 5, 9];
const arrS2 = [6, 7, 8];

arrS1.splice(2, 0, 3);
arrS1.splice(5, 0, ...arrS2);
console.log(arrS1);
