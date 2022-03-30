
var code:string= `TTTFFFTTTTTFFF`;


function compressString2(s:string):{}[] {
    
    var resString:string="";
    var curCounter:Number = 1;
    var resDict:{}[];
    if(s.length===1) {
        resDict=[{ 'COUNT':curCounter.toString(),
                    'TYPE':s}]
        
        return [...resDict];
    }

    for (let id = 0; id < s.length-1; id++) {
        const cur = s[id];
        const next = s[id+1];
        if(cur===next){

        }
    }
    
    
    return resString
}


const res = compressString2(`T`);
console.log(res);