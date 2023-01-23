const Movies = [
  "The Menu (2022)",
  "The Pale Blue Eye (2022)",
  "M3gan (2022)",
  "Glass Onion: A Knives Out Mystery (2022)",
  "Plane (2023)",
  "X (II) (2022)",
  "Bullet Train (2022)",
  "Knives Out (2019)",
  "Scream VI (2023)",
  "Ant-Man and the Wasp: Quantumania (2023)",
];

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

// Example One
const result = [];
reuse(Movies, (value) => {
  result.push(value.length);
});

// console.log(result);

// Example Two
const result1 = [];
reuse(Movies, (value) => {
  result1.push(value.toUpperCase());
});

// console.log(result1);

// Example Three
const result2 = [];
reuse(Movies, (value) => {
  result2.push(value.substr(3));
});

// console.log(result2);

const students = [
  { id: 1, name: "Rasel", gpa: 3.99, email: "rasel@gmail.com" },
  { id: 2, name: "Shakib", gpa: 3.89, email: "sakib@gmail.com" },
  { id: 3, name: "Asif", gpa: 3.5, email: "asif@gmail.com" },
  { id: 4, name: "Mizan", gpa: 3.76, email: "miazan@gmail.com" },
  { id: 5, name: "Sohan", gpa: 3.36, email: "sohan@gmail.com" },
];
