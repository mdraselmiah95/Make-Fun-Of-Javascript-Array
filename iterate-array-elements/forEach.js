/**
 * @title :forEach vs for loop
 */

let names = [
  "Stack Learner",
  "Stack School",
  "Stack Solution",
  "Stack Consulting",
];

for (let i = 0; i < names.length; i++) {
  console.log(names);
}

for (let i = 0; i < names.length; i++) {
  console.log(`${i + 1}: ${names[i]}`);
}
