/**
 * @title :Filter Method in Array
 */

const studentArray = [
  {
    id: 1,
    name: "Rasel",
    gpa: 3.99,
    email: "rasel@gamil.com",
    due: true,
    dueAmount: 1000,
  },
  {
    id: 2,
    name: "Mizan",
    gpa: 2.88,
    email: "miazan@gamil.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 3,
    name: "Rafi",
    gpa: 2.18,
    email: "rafi@gamil.com",
    due: true,
    dueAmount: 1300,
  },
  {
    id: 4,
    name: "Saif",
    gpa: 3.78,
    email: "saif@gamil.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 5,
    name: "Sakib",
    gpa: 3.98,
    email: "sakib@gamil.com",
    due: true,
    dueAmount: 1600,
  },
];

const lowGpa = studentArray.filter((value) => value.gpa < 3);
// console.log(lowGpa);

const dueStudent = studentArray.filter((value) => value.due);
console.log(dueStudent);
