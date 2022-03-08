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

//3.3 Removing Elements from an Array