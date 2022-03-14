const {Stack} = require('./stack1');


stack = new Stack();
//push an element 
stack.push('A')
stack.push('B')
stack.push('C')

//print elements
stack.toString()

//peek
console.log(stack.peek())
console.log('length: '+stack.length())
//pop
console.log(stack.pop())
console.log('length: '+stack.length())
