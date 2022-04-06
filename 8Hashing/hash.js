/**
 * A Hash Table Class 
 * We need a class to represent the hash table.The class will include functions for computing 
 * hash values, a function for insertint data into the hash table, a function for 
 * 
 */

function HashTable(){
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = this.showDistro;
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
    var totoal = 0;
    for(var i =0; i <data.length;++i){
        total+=data.charCodeAt(i);
    }
    return total % this.table.length;
}

/**
 * We can finish up this first attempt at the HashTable class with definitions for put()
 * and showDistro(), which place the data in the hash table and display the data from the
 * hash table respectively.
 */

function put(data){
    var pos = this.simpleHash(data);
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