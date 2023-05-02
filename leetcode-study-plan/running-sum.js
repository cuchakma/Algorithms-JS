var runningSum = function(nums) {
    let evaluated_array = [];
    evaluated_array.push(nums[0]);
    for( let i = 1; i < nums.length; i++ ) {
        evaluated_array.push( evaluated_array[i-1] + nums[i] );
    }
    return evaluated_array;
};
let nums = [3,1,2,10,1];
runningSum(nums);