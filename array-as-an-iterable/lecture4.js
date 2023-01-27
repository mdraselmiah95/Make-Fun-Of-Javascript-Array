/**
 * @title :Array and For Of Loop 🦏
 */

const array = ["a", "b", "c"];
const keys = array.keys();
const values = array.values();
const entries = array.entries();

const loop = (it, name) => {
  for (let v of it) {
    console.log(`[${name}] - ${v}`);
  }
};

loop(keys, "KEY");
loop(values, "VALUE");
loop(entries, "ENTRY");

const arr = [3, 5, 6, 8];
for (let v of arr) {
  console.log(v);
}
