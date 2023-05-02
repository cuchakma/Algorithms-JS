let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;
let start = 0;
let end   = array.length - 1;

function binary_search( array ) {
    let target = 11;
    let start  = 0;
    let end    = array.length;
    while( start < end ) {
        let midpoint = Math.floor( (start + end) / 2 );

        if( array[midpoint] === target ) {
            return midpoint;
        } else if( target > array[midpoint] ) {
            start = midpoint;
        } else {
            end   = midpoint;
        }
    }
}

console.log( binary_search( array ) );