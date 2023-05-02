var arr         = [110, 1, 2, 90, 10, ];
var max_diff    = arr[1] - arr[0];
var min_element = arr[0];

for( let i = 1; i < arr.length; i++) {
    if( arr[i] - min_element > max_diff ) {
        max_diff = arr[i] - min_element;
    }

    if( arr[i] < min_element ) {
        min_element = arr[i];
    }
}

console.log(max_diff);