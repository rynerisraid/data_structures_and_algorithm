
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
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

function find(node){
    var currNode = this.head;
    while(currNode.element!=item){
        currNode = currNode.next;
    }
    return currNode;
}

//Insert the new node after the node is found
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

//Display the elements of a linked list
function display(){
    var curNode = this.head;
    while(!(currNode.next==null)){
        console.log(currNode.next.element);
        currNode = curNode.next;
    }
}






