const { List } = require('./list1');
const {movies} = require('./movies');

var moviesArr = movies.split("\n");
console.log(moviesArr);

var movieList = new List();
// for(var i=0; i<moviesArr.length;i++){
//     movieList.append(moviesArr[i]);
// }

for(movieList.front();movieList.currPos()<movieList.length();movieList.next){
    console.log(movieList.getElement())
}