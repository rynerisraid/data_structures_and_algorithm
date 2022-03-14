const {List} = require('./list1');


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
//print the list of names
console.log(names.length())
console.log(names.listSize);
console.log(names.toString())

//Let's print the first element of the list and display it;
names.front()
console.log(names.getElement())


//Iterating through a List
/**
 * front(), end(), prev(), next(), currPos()
 * 1.Not having to worry about the underlying data storage structure when accessing list elements
 * 2.Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list
 * 3.Providing a uniform means of accessing elements for different types of data stores used in the implementation of a list class
 */
console.log('=====>')
for(names.front();names.currPos()<names.length();names.next()){
    console.log(names.getElement());
}

console.log('=====>')
for(names.end();names.currPos()>=0;names.prev()){
    console.log(names.getElement());
}

