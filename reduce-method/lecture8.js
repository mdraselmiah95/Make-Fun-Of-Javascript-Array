/**
 * @title :Reduce Array init single Object
 */

const products = [
  { name: "JavaScript Cookbook", price: 369 },
  { name: "Head First Python", price: 200 },
  { name: "Head First Java", price: 400 },
  { name: "JavaScript Cookbook", price: 350 },
  { name: "Head First Java", price: 400 },
  { name: "JavaScript Cookbook", price: 369 },
  { name: "JavaScript Cookbook", price: 369 },
  { name: "Head First Java", price: 400 },
  { name: "Head First Python", price: 200 },
  { name: "Head First C++", price: 650 },
];

const invoice = products.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

console.log(invoice);
