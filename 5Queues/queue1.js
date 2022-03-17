

/**
 * A Queue implementation
 */

function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.toString = toString;
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



module.exports = {
    Queue,
}
