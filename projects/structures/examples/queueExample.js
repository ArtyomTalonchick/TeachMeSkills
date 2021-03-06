const Queue = require("../structures/queue");

const tasks = new Queue();

tasks.enqueue(1);
tasks.enqueue(2);
tasks.enqueue(3);
tasks.enqueue(4);
tasks.enqueue(5);

setTimeout(() => {
    tasks.enqueue(6);
    tasks.enqueue(7);
});

setTimeout(() => {
    tasks.enqueue(8);
}, 200);


const intervalId = setInterval(() => {
    const task = tasks.dequeue();
    task && console.log(`Implementing task ${task}`);
}, 10);

setTimeout(() => clearInterval(intervalId), 3000);
