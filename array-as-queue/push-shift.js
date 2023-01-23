/**
 * @title :Array Push and Shift Methods
 */

const Queue = require("./basic-queue");
const queue = new Queue();
// queue.enqueue("Task One");
// queue.enqueue("Task Two");
// queue.enqueue("Task Three");
// queue.enqueue("Task Four");
// queue.showQueue();
// queue.dequeue();
// queue.dequeue();
// queue.showQueue();

// console.log(queue.next());
// console.log(queue);

const q = [];
q.push("Item One");
q.push("Item Two");
q.push("Item Three");
q.push("Item Four");
console.log(q);
q.shift();
q.shift();
console.log(q);
