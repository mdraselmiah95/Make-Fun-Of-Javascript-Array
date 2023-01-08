/**
 * @Title Add New Element
 * @Title Update Existing Element
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
// console.log(arrS1);

//* Update Existing Element

const numbers = [1, 2, 7, 4, 5];

//Easy one
numbers[2] = 3;

console.log(numbers);

// Array of Object

const students = [
  { id: 1, name: "Rasel" },
  { id: 2, name: "Rohim" },
  { id: 3, name: "Kohim" },
  { id: 4, name: "Shakib" },
  { id: 5, name: "Shuvo" },
];

const givenID = 3;
const updatedName = "Asif";

for (let i = 0; i < students.length; i++) {
  if (givenID === students[i].id) {
    students[i].name = updatedName;
    break;
  }
}
console.log(students);
