

strEp = `FTTFFT`;


var compressString = function(s){
    var len = s.length;
    var res = []
    if(s.length===1){
        return [{count:1,string:s}];
            
    }

    var cur = 0;
    var temp_s = s[cur];
    var counter=0;

    while(cur<len){
        if(temp_s===s[cur]){
            counter++;
            cur++;
        }else{
            res = [...res,{count:counter,string:temp_s}]
            temp_s = s[cur];
            cur++;
            counter=1;
        }
    }
    //加入最后一个Token
    res = [...res,{count:counter,string:temp_s}]

    return res;
}

console.log(compressString(strEp))