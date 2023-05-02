g = [1,2,3]; 
s = [3];

let left_pointer = 0;
let right_pointer = (numbers.length - 1);
let i = 0;

while( i < numbers.length ) {
    if( numbers[left_pointer] + numbers[right_pointer] == target || numbers[left_pointer] + numbers[right_pointer] < target ) {
        return [left_pointer + 1, right_pointer + 1];
    } else if(  numbers[left_pointer] + numbers[right_pointer] < target ) {
        left_pointer++;
    } else {
        right_pointer--;
    }
}


console.log(findContentChildren(g, s));