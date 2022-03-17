


/**
 * An Array-Based Queue Class Implementation
 */

names = []
names.push("First")
names.push("Second")
console.log(names)

names.shift()
console.log(names)


const {Queue} = require('./queue1.js')

names2 =new Queue();
names2.enqueue("Meredith");
names2.enqueue("Cynthia");
names2.enqueue("Jennifer");
names2.toString();
names2.dequeue();
names2.toString();
console.log("Front of queue: "+names2.front());
console.log("Back of queue: "+names2.back());