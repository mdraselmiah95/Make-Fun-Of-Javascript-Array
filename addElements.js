/**
 * @Title Add New Element
 */

const arrP1 = [1, 2, 3, 4];
const arrP2 = [8, 9];
arrP1[arrP1.length] = 5;
arrP1.push(6);
arrP1.push(7, 8);
// arrP1.push(...arrP2);
Array.prototype.push.apply(arrP1, arrP2);

console.log(arrP1);
