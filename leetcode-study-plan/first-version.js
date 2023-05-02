var nums   = [1,3,5,6]; 
var target = 2;
var searchInsert = function(nums, target) {
    let start = 0;
    let end   = nums.length - 1;
    while( start <= end ) {
        var midpoint = Math.floor((start + end) / 2);
        if( target == nums[midpoint] ) {
            return midpoint;
        } else if( target > nums[midpoint] ) {
            start = midpoint + 1;
        } else {
            end = midpoint - 1;
        }
    }
    return nums[midpoint] < target ? midpoint + 1 : midpoint;
};

console.log( searchInsert(nums, target) );