let numbers = [3, 3];
let target = 6;

function twoSum(nums, target) {
    let hashmap = {};
    let complement;

    // Now Check For Two Sum
    for( let i = 0; i < nums.length; i++ ) {

        complement = target - nums[i];

        if( hashmap[complement] !== undefined ) {
            return [hashmap[complement], i];
        }
        
        hashmap[numbers[i]] = i;
    }   

}

console.log(twoSum(numbers, target));
var ops = ["5", "-2", "4" ,"C", "D", "9", "+", "+"];

function baseballGame(ops) {
    var record_tracker = [];
    let result = '';
    for( let i = 0; i < ops.length; i++) {
        if( ops[i] == '+' ) {
            record_tracker.push(record_tracker.slice(-1)[0] + record_tracker.slice(-2)[0]);
        } else if( ops[i] == 'C' ) {    
            record_tracker.pop();
        } else if( ops[i] == 'D' ) {    
            record_tracker.push(record_tracker.slice(-1)[0] * 2);
        } else {
            record_tracker.push(parseInt(ops[i]));
        }
    }
    result = record_tracker.reduce((a, b) => a + b, 0);
    return result; 
   
}

baseballGame(ops);