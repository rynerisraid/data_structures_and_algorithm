

function Node(element){
    this.element = element;
    this.next = null;
}


function LinkedSet(){
    this.head = new Node("head");
    this.findPrev = findPrev;
    this.findCur = findCur;
    this.begin = begin;
    this.end = end;
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union =union;
    this.contains = contains;
    //this.intersect = intersect;
    //this.subset = subset;
    //this.difference = difference;
    this.show = show;
    //this.sort = sort;
}

function findPrev(item){
    var cur = this.head;
    try{
        while(cur.next!=null&&cur.next.element!=item){
            cur = cur.next;
        }
        if(cur.next.element===item){
            return cur;
        }else{
            throw exception;
            
        }
    }catch(e){
        console.log(e);
    }
   
}

function findCur(item){
    var cur = this.head;
    try{
        while(cur!=null&&cur.element!=item){
            cur = cur.next;
        }
        if(cur.element===item){
            return cur;
        }else{
            throw exception;
            
        }
    }catch(e){
        console.log(e);
    }
   
}

function add(item){
    var cur = this.head;
    var newNode = new Node(item);
    while(cur.next!=null){
        cur = cur.next;
        if(cur.element===item){
            return this.head;
        }
    }
    cur.next = newNode;
    return this.head;
}


function show(){
    var cur = this.head;
    while(cur!=null){
        console.log(cur.element);
        cur = cur.next;
    }
}

function remove(item){
    var cur = this.findCur(item);
    var prev = this.findPrev(item);
    prev.next = cur.next;
    return this.head;
}

function size(){
    var cur = this.head;
    var len = 0;
    while(cur!=null){
        cur = cur.next;
        len++;
    }
    return len;
}


function contains(item){
    var cur = this.head;
    while(cur!=null){
        if(cur.element===item){
            return true;
        }
        cur = cur.next;
    }
    return false;
}

function begin(){
    return this.head;
}

function end(){
    var cur = this.head;
    while(cur.next!=null){
        cur = cur.next;
    }
    return cur;
}

function union(set){
    var tempSet = new LinkedSet();
    for(var iter = this.begin();iter!=this.end();iter=iter.next){
        if(!tempSet.contains(iter.element)){
            tempSet.add(iter.element);
        }
    }
    for(var iter = set.begin();iter!=set.end();iter=iter.next){
        if(!this.contains(iter.element)){
            tempSet.add(iter.element);
        }
    }
    return tempSet;
}


module.exports = {
    LinkedSet
}