/**
 * List:
 * A list is an ordered sequence of data, each data item stored in a list is called an element
 * Abstract Data Type:
 * 1. listSize
 * 2. position
 * 3. length
 * 4. clear
 * 5. toString
 * 6. getElement
 * 7. insert
 * 8. append
 * 9. remove
 * 10.front
 * 11.end
 * 12.prev
 * 13.next
 * 14.currPos
 * 15.moveTo
 */

function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}


//Append: Adding an element to a list
function append(element){
    this.dataStore[this.listSize++] = element;
}

//Find: Finding an element in a list
function find(element){
    for(var i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}

//Remove: Removing an element from a list
function remove(element){
    var foundAt = this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

//Length: Determining the number of elements in a list
function length(){
    return this.listSize;
}
//toString: Retrieving a List's Elements
function toString(){
    return this.dataStore;
}
//Insert: Inserting an element into a list
function insert(element,after){
    var insertPos = this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
}
//Clear: Removing all elements from a list
function clear(){
    delete this.dataStore;
    this.dataStore = []
    this.listSize = this.pos = 0;
}

//Contains: Determinging if a Given Value is in a list
function contains(element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
            return true;
        }

    }
    return false;
}

//Traversing a List: getElement() display the current element in a list
function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize-1;
}

function prev(){
    if(this.pos>-1){
        --this.pos;
    }
}

function next(){
    if(this.pos<this.listSize){
        ++this.pos;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}






module.exports={
    List,
};



