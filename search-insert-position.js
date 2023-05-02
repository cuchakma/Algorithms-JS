var nums = [1, 3, 5, 6];
var target = 7;

function searchInsert(nums, target) {

    for( let i = 0; i < nums.length; i++ ) {
        if( nums[i] == target ) {
            return i;
        }
    }

    for( let i = 0; i < nums.length; i++ ) {
        if( target < nums[i] ) {
            return i;
        }
    }
    return nums.length;
}

console.log( searchInsert(nums, target) );