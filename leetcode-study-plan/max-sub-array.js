var array = [-2,1,-3,4,-1,2,1,-5,4];
var max_sum = array[0];
var sum = 0;

/**
 * Optimized Solution
 */
for( let i = 0; i < array.length; i++ ) {
    if( sum < 0 ) {
        sum = 0;
    }
    sum += array[i];
    max_sum = Math.max(sum, max_sum);
}
console.log(max_sum);