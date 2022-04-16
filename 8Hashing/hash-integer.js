/**
 * Hashing Integer Keys
 * In this section, we introduct how to hash integer key.
 * The data set we're working with is student grades.
 * The key is a nine-digit student identification number,
 * which we will generate randomly, along with the student's
 * grade
 */

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function genStuData(arr){
    for(var i=0;i<arr.length;++i){
        var num="";
        for(var j=0; j<=9;++j){
            num+=Math.floor(Math.random()*10);
        }
        
        num+=getRandomInt(50,100);
        arr[i] = num;
    }
}

module.exports={
    genStuData,
}