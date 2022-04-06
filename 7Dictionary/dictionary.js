

function Dictionary(){
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key,value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key]
}

function showAll(){
    Object.keys(this.datastore).forEach((key)=>{
        console.log("key:"+key+",value:"+this.datastore[key]);
    });
}


module.exports={
    Dictionary,
}

