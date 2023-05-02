//used array sum prefix pattern
var nums = [1,7,3,6,5,6];
var pivotIndex = function(nums) {
    let nums1 = [...nums];
    let nums2 = [...nums];

    for( let i = 1; i < nums1.length; i++ ) {
        nums1[i] = nums1[i - 1] + nums1[i];    
    }

    for( let i = nums2.length - 2; i >= 0; i-- ) {
        nums2[i] = nums2[i + 1] + nums2[i];    
    }

    for( let i = 0; i < nums.length; i++ ) {
        if( nums1[i] == nums[2] ) {
            return i;
        }
    }
    return -1;
};
pivotIndex(nums);