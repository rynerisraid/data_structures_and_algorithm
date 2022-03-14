

/**
 * A Stack implementation
 */

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element){
    this.dataStore[this.top++] = element;
}




