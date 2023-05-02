let array = [10, 22, 9, 33, 21, 50, 41, 60];
let hashmap = [];
//Dynamic Programming Solution


// Create an array and place 1 as value
for( let i  = 0; i < array.length; i++ ) {
    let obj = {};
    obj[array[i]] = 1;
    hashmap.push(obj);
}

// Main Logic
for( let i = 1; i < hashmap.length; i++ ) {
    let limit =  i - 1;
    for( let j = 0; j <= limit; j++ ) {
        if( array[i] > array[j] ) {
            hashmap[i][array[i]] =  Math.max(hashmap[i][array[i]], hashmap[j][array[j]] + 1);
        }
    }
}
