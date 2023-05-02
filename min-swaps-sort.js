var arr = [1, 3, 5, 2, 4, 6, 7];
var hashmap = {};
var vector  = [];
var i       = 0;
var swaps   = 0;
var index;
var temp;
const sorted_arr = [...arr].sort();

for( let i = 0; i < arr.length; i++ ) {
    hashmap[arr[i]] = i;
}

Object.keys(hashmap).sort((a, b) => {return a - b});

for(let key in hashmap) {
    vector[i] = [ key, hashmap[key] ];   
    i++;
}

for( let i = 0; i < arr.length; i++ ) {
    if( vector[i][1] == i ){
        continue;
    } else {
        index = vector[i][1];
        temp  = vector[i];
        vector[i] = vector[index];
        vector[index] = temp;
        i--; 
        swaps++;
    }
}