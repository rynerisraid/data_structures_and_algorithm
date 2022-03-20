/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return string字符串
 */
 function isNumber(c){
    return /^[0-9]/.test(c);
}
function isLeft(c){
    return (c==='[')? true:false;
}

function isRight(c){
    return (c===']')? true:false;
}

function isVline(c){
    return (c==='|')? true:false;
}

function isAplha(c){
    return /^[A-Za-z]/.test(c)?true:false;
}
function topItem(arr){
    return arr[arr.length-1];
}

function compress( str ) {
    // write code here
    var arrstr = str.split('');
    var stackChar = [];
    var stackNumber = [];
    var stackSymbol  = [];

    for(var i=0;i<arrstr.length;i++){
        var cur = arrstr[i];

        if(isAplha(cur)||isVline(cur)){
            stackChar.push(cur);
        }else if(isNumber(cur)){
            stackNumber.push(cur);
        }else if(isLeft(cur)){
            stackSymbol.push(cur);
        }else if(isRight(cur)){
            var tempStr = ''
            while(stackChar.length>0&&topItem(stackChar)!='|'){
                tempStr+=stackChar.pop()+"|";
            }
            var newStr = tempStr.split('|').reverse().join('')
            stackChar.pop()
            //console.log('pop |' + newStr +" "+ stackChar.pop());
            var numChar = stackNumber.pop();
            var sum = ''
            for(var j=0;j<parseInt(numChar);j++){
                sum+=newStr
            }
            //console.log('sum: ' + sum);
            stackChar.push(sum);
            
        }
    }



    return stackChar
}

var testStr ="HG[3|B[2|CA]]F";
var res = compress(testStr);
console.log(res);

// module.exports = {
//     compress : compress
// };