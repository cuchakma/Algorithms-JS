var twoSum = function(nums, target) {
    let hashmap = {};
    let complement;

    // Now Check For Two Sum
    for( let i = 0; i < nums.length; i++ ) {

        complement = target - nums[i];

        if( hashmap[complement] !== undefined ) {
            return [hashmap[complement], i];
        }
        
        hashmap[nums[i]] = i;
    }   
};

var nums = [3, 2, 4]; 
var target = 6; 

console.log( twoSum(nums, target) );