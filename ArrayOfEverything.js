/**
 * @Title => Array Of Everything.
 */

// Array of Function

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10,
  b = 20;

for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  console.log(`[${funcs[i].name}] Result = ${result}`);
}
