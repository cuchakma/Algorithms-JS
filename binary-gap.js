let binary_num = 51272;
var binaryGap = function(n) {

    /**
     * Conver the integer to binary(return type is string)
     */
    n = (n >>> 0).toString(2);
  
    /**
     * Binary Gap Using Hashmap(Key Value Pairs)
     */
    let hashmap = {};
    let max_gap = [];
    let max     = 0;
    for(let i = 0; i < n.length; i++) {
        if( n[i] == '1' && hashmap[n[i]] == undefined ) {
            hashmap[n[i]] = i; 
        } else if(  hashmap[n[i]] != undefined ) {
            max = Math.max(max, parseInt( i - hashmap[n[i]] - 1 ));
            hashmap[n[i]] = i;
        }
    }
    return max;
};

console.log(binaryGap(binary_num));