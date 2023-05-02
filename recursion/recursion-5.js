/**
 * Reverse an array using recursion using two pointers
 */
function reverseArray( values, i, j ) {
    if( j <= i ) {
        return;
    }
    let temp  = values[i];
    values[i] = values[j];
    values[j] = temp;
    return reverseArray(values, ++i, --j);
}

let numbers = [90, 1, 2, 4 ,5 ,7 , 8];
reverseArray(numbers, 0, numbers.length - 1);
console.log(numbers);