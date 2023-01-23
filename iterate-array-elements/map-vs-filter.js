/**
 * @title :Filter vs Map
 */

const students = [
  { id: 1, name: "Rasel", gpa: 3.99, email: "rasel@gmail.com" },
  { id: 2, name: "Shakib", gpa: 3.89, email: "sakib@gmail.com" },
  { id: 3, name: "Asif", gpa: 2.99, email: "asif@gmail.com" },
  { id: 4, name: "Mizan", gpa: 2.76, email: "miazan@gmail.com" },
  { id: 5, name: "Sohan", gpa: 3.36, email: "sohan@gmail.com" },
];

const emailTemplate = students
  .filter((value) => value.gpa < 3)
  .map((value) => {
    return {
      ...value,
      title: "Result Published",
      msg: "You have Failed",
    };
  });

console.log(emailTemplate);
