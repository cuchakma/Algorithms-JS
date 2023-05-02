/**
 * Reverse an array using 2 pointers
 */

let arr = [-12, 3, 4, 5, 100, 100];

for(let i  = 0; i < Math.floor( arr.length/2 ); i++) {
    let first_pointer_value = arr[i];
    let last_pointer_value  = arr[(arr.length - 1) - i];
    arr[(arr.length - 1) - i] = first_pointer_value;
    arr[i]                    = last_pointer_value;
    // console.log(first_pointer_value)+" <----------> ";
    // console.log(last_pointer_value)+"\n";
    // console.log("-----------------------\n");
}

console.log(arr);
//console.log(Math.floor( arr.length/2 ));