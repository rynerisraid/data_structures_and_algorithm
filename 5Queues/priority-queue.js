/**
 * A priority queue is one where elements are removed from the 
 * queue based on a priority constraint.For example, the waiting 
 * room at a hospitial's emergency department operates using a
 * priority queue. 
 * When a patient enters the ED, ht or she is seen by a triage nurse.
 */


/**
 * The element of queue
 */
function Patient(name,code){
    this.name = name;
    this.code = code;
}

const {Queue} = require('./queue1');


var ed = new Queue();
var p = new Patient("smith",5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
ed.toString();

var seen = ed.dequeueWithPriority();
console.log("1.Patient being treated: "+seen[0].name);
console.log("The waiting queue");
ed.toString()

seen = ed.dequeueWithPriority();
console.log("2.Patient being treated: "+seen[0].name);
console.log("The waiting queue");
ed.toString()

seen = ed.dequeueWithPriority();
console.log("3.Patient being treated: "+seen[0].name);
console.log("The waiting queue");
ed.toString()

