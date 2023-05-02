var carpoints =  function(ops) {
    var score_array = [];
    var result      = null;
    for( let i = 0; i < ops.length; i++ ) {
        if( ops[i] != "+" && ops[i] != "D" && ops[i] != "C"){
            score_array.push(ops[i]);
        } else if( ops[i] == "+" ) {
            var second_num = score_array.pop();
            var first_num  = score_array.pop();
            score_array.push(first_num);
            score_array.push(second_num);
            score_array.push( parseInt(second_num) + parseInt(first_num) );
        } else if( ops[i] == "C" ) {
            score_array.pop();
        } else if( ops[i] == "D" ) {
            var previous_num = score_array.pop();
            score_array.push(previous_num);
            score_array.push(previous_num * 2);
        }
    }
    return score_array.reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

let ops = ["5", "2", "C", "D", "+"];

console.log(carpoints(ops));