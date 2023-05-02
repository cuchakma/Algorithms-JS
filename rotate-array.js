//Brute Force
// var array = [3, 8, 9, 7, 6]; //[9, 7, 6, 3, 8]
// var k = 3;
// for( let i = 0; i < k; i++) {
//     var last_element = array[array.length - 1];
//     for( let j = array.length - 1; j > 0; j-- ) {
//         array[j] = array[j - 1];
//     }
//     array[0] = last_element;
// }
// console.log(array);


// Optimized Solution
var rotate = function(nums, k) {
   k = k % nums.length;
   var start_1 = 0;
   var start_2 = 0;
   var start_3 = k;
   var end_1   = ( nums.length - 1 );
   var end_2   = k - 1;
   var end_3   = ( nums.length - 1 );
   var temp1;
   var temp2;

   // Step 1 : (Reverse the array)

   while( start_1 <= end_1 ) {
      temp1 = nums[start_1];
      temp2 = nums[end_1];
      nums[start_1] = temp2;
      nums[end_1]   = temp1;
      start_1++;
      end_1--;
   }

   // Step 2 : Reverse till K values
   while( start_2 <= end_2 ) {
      temp1 = nums[start_2];
      temp2 = nums[end_2];
      nums[start_2] = temp2;
      nums[end_2]   = temp1;
      start_2++;
      end_2--;
   }

   // Step 3 : Revers From K to Last Number 
   while( start_3 <= end_3 ) {
      temp1 = nums[start_3];
      temp2 = nums[end_3];
      nums[start_3] = temp2;
      nums[end_3]   = temp1;
      start_3++;
      end_3--;
   }

   return nums;

};

var array = [-1, -100, 3, 99]; //[9, 7, 6, 3, 8]
var k = 2;

console.log( rotate(array, k) );