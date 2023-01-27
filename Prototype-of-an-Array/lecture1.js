/**
 *@title :Prototype of an Array 🐸
 */

const arr = [1, 2, 3];
console.log(arr.constructor.prototype);
console.log(Array.prototype);

console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
  console.log(this.join(" | "));
};

arr.log();

const names = ["Rasel", "Shakib", "Asif", "Rafi"];
names.log();

Array.prototype.loop = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.loop((v) => {
  console.log(`My name is ${v}`);
});

arr.loop((v) => {
  console.log(`V = ${v} V*2 = ${v * 2}`);
});
