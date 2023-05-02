nums = [-1,0,3,5,9,12]; 
target = -12;

var search = function(nums, target) {
    let start = 0;
    let end   = nums.length - 1;
    while( start <= end ) {
        let mid_point = Math.floor(( start + end ) / 2);
        if( target == nums[mid_point] ) {
            return mid_point;
        } else if( target > nums[mid_point] ) {
            start = mid_point + 1;
        } else{
            end = mid_point - 1;
        }
    }
    return -1;
};


console.log( search(nums, target) );
