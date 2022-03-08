/**
 * 1. Creating arrays
 */

//1.1 [] operator
var numbers = [1,2,3,4,5]
console.log(numbers.length)
console.log(numbers)

//1.2 Array construscure
var numbers = new Array()
var numbers = new Array(1,2,3,4,5)


//1.3 JavaScript array elemtns do not all have to be of the same type:
var objects = [1,"Joe",true,null]

//1.4 Type checker
var arr = [1,2,3,4]
console.log(Array.isArray(arr)) //display true


/**
 * 2. Accessing and Writting Array Elements
 */

var numbers = [1,3,4,5,6,7,22]
var sum = 0
for(var i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
console.log(sum)

//2.1 Creating Arrays from Strings
var sentence = "the quick brown fox jumped over the lazy dog"
var words = sentence.split(" ")

var sentence2 = words.join()

//2.2 Creating Arrays from existing arrays
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);


/**
 * 3.Mutable and immutable elements in JavaScript
 */

//3.1 Adding element to the tail of array
var nums = [1,2,3,4,5]
nums.push(6)

//3.2 Adding element to the head of array
var nums = [2,3,4,5,6]
nums.unshift(1)
var newnum = 1
nums.unshift(newnum,1,2)

//3.3 Removing elements from the tail of Array
var nums = [1,2,3,4,5,9]
nums.pop()


//3.4 Removing elements from the head of array
var nums = [9,1,2,3,4,5]
var frist = nums.shift()

//3.5 Adding and Removing elements from the middle of an array
var nums = [1,2,3,7,8,9]
var newElements = [4,5,6]
nums.splice(3,0,newElements)
console.log(nums)
var nums = [1,2,3,7,8,9]
nums.splice(3,0,4,5,6)
console.log(nums)

/**
 * 4. Putting array elements in order
 */
function compare(num1,num2){
    return num1-num2;
}
var nums = [3,1,2,100,4,200]
nums.sort()         // sort the elements lexicographically
console.log(nums) 
nums.sort(compare)  // sort the elements numerically
console.log(nums)

/**
 * 5.Iterator Functions
 */

// 5.1 Iterator Function
function square(num){
    console.log(num,num*num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

function isEven(num){
    return num%2==0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven); 
//if the function can return true for every element is even
console.log(even)

var isSomeEven = nums.some(isEven);
console.log(isSomeEven)

// 5.2 The map and reduce function
function square(curval){
    return curval*curval;
}
function add(running_total,current_val){
    return running_total + current_val;
}

function concat(accmulateStr,item){
    return accmulateStr+item;
}

var nums = [1,2,3,4,5]
//map
var sq_nums =  nums.map(square);
console.log(sq_nums)
//reduce
var reduce_num = nums.reduce(add);
console.log(reduce_num)
//map_reduce
var map_reduce_num = nums.map(square).reduce(add)
console.log(map_reduce_num)

var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
var sentenceRight = words.reduceRight(concat);

//filter
nums = [1,2,3,4,5,6,7,8,9,10]
var evens = nums.filter((item)=>{return item%2==0;});
console.log(evens)


/**
 * Two-Dimensional and Multidimensional Arrays
 */

 Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
    columns[j] = initial;
    }
    arr[i] = columns;
    }
    return arr;
   }

var nums = Array.matrix(5,5,0);
console.log(nums);



/**
 * Exercise 1. Create a grades object that stores a set of student grades in an object. Provide a
     function for adding a grade and a function for displaying the student’s grade average.
 */

function average(nums){
   return  nums.reduce(add)/nums.length;
}
var grades = [9,8,9,4,5]
console.log(average(grades))


/**
 * 2. Store a set of words in an array and display the contents both forward and backward.
 */

var words = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
console.log(words.reverse())

/**
 * 
 * 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly aver‐ age, a specific week’s average, and all the weeks’ averages.
*/

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
   
   function add(temp) {
    this.dataStore.push(temp);
   }

   function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
   }
}
   var thisWeek = new weekTemps();
   thisWeek.add(52);
   thisWeek.add(55);
   thisWeek.add(61);
   thisWeek.add(65);
   thisWeek.add(55);
   thisWeek.add(50);
   thisWeek.add(52);
   thisWeek.add(49);
   console.log(thisWeek.average()); // displays 54.875

function MonthTemps(){
    this.monthTemps = []
    function addItem(weektemp){
        this.monthTemps.push(weektemp)
    }
    //ERROR!
}

var mthtemps = [];
for(var i =0;i<4;i++){
    var thisWeek = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(61);
    thisWeek.add(65);
    thisWeek.add(55);
    thisWeek.add(50);
    thisWeek.add(52);
    thisWeek.add(49);
    mthtemps.push(thisWeek);
}
console.log(mthtemps)




/*
 * 4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word
 */

var words = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]
console.log(words.join().split(""))