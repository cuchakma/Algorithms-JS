var array   = [1, 5, 3, 4, 2];
var hashmap = [];
var left = [];
var right = [];
var k       = 3;

// //brute force solution
// for( let i = 0; i < array.length; i++ ) {
//     let first_value = array[i];
//     for(let j = i + 1; j < array.length; j++ ) {
//         if( array[j] > first_value ) {
//             var diff = array[j] - first_value;
//         } else {
//             var diff = first_value - array[j] ;
//         }

//         if( diff == k ) {
//             console.log('('+array[i]+','+array[j]+')'+"\n");
//         }
//     }
// }

// Use hashmap technique
for( let i = 0; i < array.length; i++ ) {
    if( ! element_exists( array[i], hashmap ) ) {
        hashmap.push( array[i] );
    }
}


//Check if pairs form a diff equal to k
for( let i = 0; i < array.length; i++ ) {
    if( array[i] > k ) {
        var diff = array[i] - k;
    } else {
        var diff = k - array[i];
    }

    if( element_exists( diff, hashmap ) && ! element_exists( diff, right ) && ! element_exists( array[i], left ) ) {
        right.push(diff);
        left.push(array[i]);
    }
}

console.log(left);
console.log(right);

/**
 * Check if a value is present inside an array or not
 * 
 * @param integer value 
 * @param array array
 * @returns bool 
 */
function element_exists( value, array ) {
    for( let i = 0; i < array.length; i++ ) {
        if( value === array[i] ) {
            return true
        }
    }
    return false
}