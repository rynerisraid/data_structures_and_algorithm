/**
 * Set definitions
 * - A set containing no members is called the empty set. The universe is the set of all possible members
 * - Two sets are considered equal if they contain exactly the same members
 * - A set is considered a subset of another set if all the members of the first set are contained in 
 * the second
 */



/**
 * Set Operations
The fundamental operations performed on sets are:
1)Union
 - A new set is obtained by combining the members of one set with the members of
   another set.
2)Intersection
 - A new set is obtained by adding all the members of one set that also exist in a second
    set.
3)Difference 
 - A new set is obtained by adding all the members of one set except those that also exist in a second set.
 */

 /**
  * The Set Class Implementation
  */

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    //this.union =union;
    //this.intersect = intersect;
    //this.subset = subset;
    //this.difference = difference;
    this.show = show;
}
 
function add(data){
    if(this.dataStore.indexOf(data)<0){
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
}


function remove(data){
    var pos = this.dataStore.indexOf(data);
    if(pos>-1){
    this.dataStore.splice(pos,1);
    return true;
    }else{
    return false;
    }
}

function show(){
    console.log(this.dataStore);
}

function size(){
    return this.dataStore.length;
}


module.exports={
    Set
};