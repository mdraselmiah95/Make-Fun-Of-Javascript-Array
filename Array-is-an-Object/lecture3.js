/**
 *@title : Compare Two Arrays  🤸
 */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
  console.log("EQUAL");
} else {
  console.log("NOT EQUAL");
}
