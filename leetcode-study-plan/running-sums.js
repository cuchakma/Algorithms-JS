var nums = [3,1,2,10,1];
var runningSum = function(nums) {
    var output = [];
    let sum;
    for( let i = 0; i < nums.length; i++ ) {
        sum = 0;
        for( let j = 0; j < ( i + 1 ); j++ ) {
            sum += nums[j];
        }
        output[i] = sum;
    }
    return output;
};

console.log( runningSum(nums) );