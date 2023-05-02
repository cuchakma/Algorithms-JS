let numbers =  [-1,0];
let target = -1;

var twoSum = function(numbers, target) {
    let left_pointer = 0;
    let right_pointer = (numbers.length - 1);
    let i = 0;

    while( i < numbers.length ) {
        if( numbers[left_pointer] + numbers[right_pointer] == target ) {
            return [left_pointer + 1, right_pointer + 1];
        } else if(  numbers[left_pointer] + numbers[right_pointer] < target ) {
            left_pointer++;
        } else {
            right_pointer--;
        }
    }

};

console.log(twoSum(numbers, target));
