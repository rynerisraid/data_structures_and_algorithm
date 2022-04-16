/**
 * A Hash Table Class 
 * We need a class to represent the hash table.The class will include functions for computing 
 * hash values, a function for insertint data into the hash table, a function for 
 * 
 */

function HashTable(){
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.betterHash = betterHash;
    this.put = put;
}

/**
 * Choosing a Hash Function
 * The choice of a has function depends on the data type of the key.
 * A simple hash function that at first glance seems to work well is to sum the ASCII
 * value of the letters in the key.
 * The hash value is then that sum modulo the array size.
 */

function simpleHash(data){
    var total = 0;
    for(var i =0; i <data.length;++i){
        total+=data.charCodeAt(i);
    }
    return total % this.table.length;
}

/**
 * Better hash function:
 * The new hash function works by summing the ASCII values of the
 * characters of a string, but it adds a step by multiplying the
 * resulting total by a prime constant.
 * 
 */

function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i =0; i<string.length;++i){
        total+=H*total + string.charCodeAt(i);
    }
    total = total%this.table.length;
    if(total<0){
        total+=this.table.length-1;
    }

    return parseInt(total);
}


/**
 * We can finish up this first attempt at the HashTable class with definitions for put()
 * and showDistro(), which place the data in the hash table and display the data from the
 * hash table respectively.
 */

function put(data){
    //var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data;
}


function showDistro(){
    var n = 0;
    for(var i=0; i<this.table.length; ++i){
        if(this.table[i]!=undefined){
            console.log(i+":"+this.table[i]);
        }
    }
}



module.exports={
    HashTable
}