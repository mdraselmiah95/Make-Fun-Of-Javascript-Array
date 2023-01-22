/**
 * @title :Array Push and Poll Method
 */

const Stack = require("./basic-stack");

const stack = new Stack();
const text = "HELLO";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt([i]));
}

let reversedText = "";
while (!stack.isEmpty()) {
  reversedText += stack.pop();
}

console.log(reversedText);
