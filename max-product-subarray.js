/**
 * This approach is efficient
 */

var array = [-2, -40, 0, -2, -3];
var temp;
var final_result = array[0];
var max = array[0];
var min = array[0];

for( let i = 1; i < array.length; i++ ) {
    //Swap numbers if the current value is negetive in order to not to lose the max value
    if( array[i] < 0 ) {
        temp = max;
        max = min;
        min = temp;
    }

    //find the max-min of continuous values by storing the previous product
    max = Math.max( array[i], array[i] * max );
    min = Math.min( array[i], array[i] * min );

    if( final_result < max ) {
        final_result = max;
    }
}
console.log(final_result);