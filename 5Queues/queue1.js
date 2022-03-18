

/**
 * A Queue implementation
 */

function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.dequeueWithPriority = dequeueWithPriority;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.toString = toString;
    this.toStringWithPriority = toStringWithPriority;
}


/**
 * The enqueue() function adds an element to the end of a queue
 * @param {item in quque} element 
 */
function enqueue(element){
    this.dataStore.push(element);
}

/**
 * The dequeue() function removes an element from the front of a queue
 * @param {item in queue} element 
 */
function dequeue(element){
    return this.dataStore.shift();
}

/**
 * 
 * @returns the first element of the queue
 */
function front(){
    return this.dataStore[0];
}

/**
 * 
 * @returns the last element of the queue
 */
function back(){
    return this.dataStore[this.dataStore.length-1];
}


/**
 * Print elements on the queue
 */
function toString(){
    console.log(this.dataStore);
}


/**
 * 
 * @returns boolean=> is the queue empty?
 */
function empty(){
    if(this.dataStore.length==0){
        return true;
    }else{
        return false;
    }
}


/**
 * 
 * @returns 
 */
function dequeueWithPriority() {
    var priority = this.dataStore[0].code;
    for(var i=1;i<this.dataStore.length;++i){
        if(this.dataStore[i].code<priority){
            priority = i;
        }
    }
    console.log("dequeue with priority: "+priority);
    return this.dataStore.splice(priority,1);
}


function toStringWithPriority() {
    console.log(this.dataStore);
}


module.exports = {
    Queue,
}

