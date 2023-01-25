/**
 * @title :Implement Bubble Sort with Callback
 */

const actress = [
  { id: 2, name: "Angelina Jolie" },
  { id: 4, name: "Scarlett Johansson" },
  { id: 6, name: "Jennifer Lawrence" },
  { id: 11, name: "Anne Hathaway" },
  { id: 5, name: "Emily Blunt" },
  { id: 3, name: "Elizabeth Olsen" },
  { id: 9, name: "Zendaya" },
  { id: 1, name: "Anya Taylor-Joy" },
  { id: 7, name: "Shailene Woodley" },
  { id: 8, name: "Anne Hathaway" },
  { id: 10, name: "Anne Hathaway" },
];

const bubbleSort = (array, cb) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cb(array[j], array[j + 1]) > 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

const arr = [10, 4, 6, 8, 9, 20, 30, 45, 78, 101, 1, 99, 23, 5, 67, 81, 30];
// bubbleSort(arr, (a, b) => a - b);
bubbleSort(arr, (a, b) => b - a);
console.log(arr);

bubbleSort(actress, (a, b) => a.id - b.id);
console.log(actress);

bubbleSort(actress, (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(actress);
