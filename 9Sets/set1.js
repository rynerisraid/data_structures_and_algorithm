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
    this.contains = contains;
    this.union =union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.sort = sort;
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


/**
 * More Set Operations
 * The more interesting functions to define are 
 * union() 
 * intersect() 
 * subset()
 * difference()
 * 
 */

/**
 * Define a helper function to Set Operations
 * @param {*} data 
 */
function contains(data) {
    return this.dataStore.indexOf(data)>-1?true:false
}


function union(set){
    var tempSet = new Set()
    for(var i=0;i<this.dataStore.length;++i){
        tempSet.add(this.dataStore[i]);
    }

    for(var i=0; i<set.dataStore.length;++i){
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }

    return tempSet;
}

/**
 * This function is easier to defince:
 * Each time a member og the first set is found to be a member of the
 * second set it is added to a new set, which is the returen value of 
 * the function.
 * Here is the definition
 * @param {*} set 
 */

function intersect(set) {
    var tempSet = new Set();
    for(var i = 0; i< this.dataStore.length;i++){
        if(set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i])
        }
    }

    return tempSet;
}


/**
 * Subset operation
 */

function subset(set){
    if(this.size()>set.size()){
        return false;
    }
    else{
        for(var i=0;i<this.dataStore.length;i++){
            if(!set.contains(this.dataStore[i])){
                return false;
            }
        }
        return true;
    }

}


/**
 * This function returns a set that contains those members of the first
 * set that are not in the second set. The deficition for difference() is
 * shown below:
 */

function difference(set) {
    var tempSet = new Set();
    for(var i=0; i< this.dataStore.length;i++){
        if(!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function sort(){
    this.dataStore.sort();
}

module.exports={
    Set
};