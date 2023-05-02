let arr = [30, 20, 50]; 

let K   = 70;

arr.sort( ( a, b ) => { 
    a-b 
});

let left_pointer = 0;

let right_pointer = arr.length;

let max = 0;

while( left_pointer < right_pointer ) {
    if( arr[left_pointer] + arr[right_pointer] == K ) {
        max = Math.max(max, arr[left_pointer] + arr[right_pointer] );
        left_pointer++;
    }else if( arr[left_pointer] + arr[right_pointer] < K ){
        max = Math.max(max, arr[left_pointer] + arr[right_pointer] );
        left_pointer++;
    } else {
        right_pointer--;
    }
    return max;
}