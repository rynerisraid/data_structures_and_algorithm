
/**
 * A Stack Implementation
 * 
 */

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

/**
 * Push: Pushing a new element onto a stack an store it in the position
 * 
 */
function push(element){
    this.dataStore[this.top++] = element;
}

/**
 * Pop: The pop function does the reverse of the push funcion--it returns the 
 * element in the top position of the stack and then decrements the top variable
 */
function pop(){
    return this.dataStore[--this.top];
}

/**
 * Peek: The peek function returns the top element of the stac by accessing the 
 * element at the top-1 position of the array
 */
function peek(){
    return this.dataStore[this.top-1];
}

module.exports = {
    Stack
}