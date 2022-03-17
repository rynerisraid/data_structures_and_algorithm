const {Queue} = require('./queue1');
const {dancers} = require('./dancers');

console.log(dancers);

/**
 * Using the Queue Class: Assigning Partners at a square dance
 */


/**
 * Dancer Object
 */
function Dancer(name,sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males,females,dancers){
    
    var names = dancers.split("\n");
    console.log(names);
    names.forEach(element => {
        element = element.trim();
    });

    names.forEach(element=>{
        var dancer = element.split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex==='F'){
            females.enqueue(new Dancer(name,sex));
        }else{
            males.enqueue(new Dancer(name,sex));
        }
    });
}

function dance(males,females){
    males.toString();
    females.toString();
    while(!females.empty()&&!males.empty()){
        person = females.dequeue();
        
        console.log("female dancer is: "+person.name);
        person = males.dequeue();
        console.log("male dancer is: "+person.name)
    }
}


var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers,dancers);

dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}