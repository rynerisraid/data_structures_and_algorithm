
/**
 * Linked Lists
 * When you determine that operations perfomed on an array are to slow for
 * practical use, you can consider using the linked list as an alternative
 * data structure.
 * The linked list can be used in almost every situtaion where one-dimensional
 * array is used except when you need random access to the elements of a list.
 * When random access is required, an array is the better data structure to use.
 */


//An Object-based Linked List Design
function Node(element){
    this.element = element;
    this.next = null;
}


function LList(){
    this.head = new Node("head");
    this.findCurrent = findCurrent;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.insertAfter = insertAfter;
    this.display = display;
}

function findCurrent(item) {
    var cur = this.head;
    while(cur!=null){
        if(cur.element===item){
            return cur;
        }
        cur = cur.next;
    }
    if(cur===null){
        return this.head;
    }
    
}

function findPrevious(item){
    var cur = this.head;
    while(cur.next!=null&&cur.next.element!==item){
        cur = cur.next;
    }
    if(cur.next.element===item){
        return cur;
    }
    if(cur.next===nul){
        return this.head;
    }
}

function insert(item){
    var cur = this.head;
    var newNode = new Node(item);
    while(cur.next!=null){
        cur = cur.next;
    }
    cur.next = newNode;
    return this.head;
}

function display(){
    var cur = this.head;
    while(cur!==null){
        console.log(cur.element);
        cur = cur.next;
    }
}

function remove(item){
    var cur = this.findCurrent(item);
    var prev = this.findPrevious(item);
    prev.next = cur.next;
    return cur;
}

function insertAfter(newElem,item){
    var curNode = new Node(newElem);
    var cur = this.findCurrent(item);
    curNode.next = cur.next;
    cur.next = curNode
    return cur;
}



module.exports={
    LList,
    Node
}

