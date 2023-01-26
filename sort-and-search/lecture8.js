/**
 * @title :Find Method in JavaScript🏇
 * @definition :The find() method returns the value of the first element that passes a test.
 */

const todos = [
  { id: "123", task: "Eat", time: "Morning" },
  { id: "234", task: "Code", time: "Afternoon" },
  { id: "562", task: "Coffee Break", time: "Evening" },
  { id: "232", task: "Sleep", time: "Night" },
];

const todo = todos.find((item) => item.time.toLowerCase() === "evening");
todo.task = "Debugging 😲";
console.log(todos);
console.log(todo);

const result = [
  { name: "Rasel", score: 99 },
  { name: "Robin", score: 91 },
  { name: "Shakib", score: 81 },
  { name: "Mehedi", score: 79 },
  { name: "Shakib", score: 93 },
];

const highest = 99;
const student = result.find((item) => item.score === highest);
console.log(student);

const ourFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};

const lowest = 79;
const student1 = ourFind(result, (item) => item.score === lowest);
console.log(student1);
