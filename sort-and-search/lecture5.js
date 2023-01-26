/**
 * @title :Understand and Implement Linear Search 🏇
 */

const arr = [1, 3, 4, 7, 98, 30, 5, 90, 3242, 09, 432, 878, 323, 41, 08, 91];

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

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

const S1 = linearSearch(arr, 90);
console.log(S1);

const linearSearchCB = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
};

const s3 = linearSearchCB(actress, (item) => item.name === "Elizabeth Olsen");
console.log(s3);
