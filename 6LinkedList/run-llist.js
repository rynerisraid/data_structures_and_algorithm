
const {LList,Node} = require('./linked-list');

var cities = new LList();
cities.insert("Beijing");
cities.insert("Shanghai");
cities.insert("ShenZhen");
cities.insert("GuangZhou");
cities.display()
var prev = cities.findPrevious("Shanghai");
console.log(prev)
var curr = cities.findCurrent("Shanghai");
console.log(curr)

var delItem = cities.remove("Shanghai")
console.log("===delete element===")
cities.display()

cities.insertAfter("Shanghai","Beijing");
console.log("====insert element===")
cities.display()

