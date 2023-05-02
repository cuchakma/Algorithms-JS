var s = "bbbaaaba";
var t = "aaabbbba";
var isIsomorphic = function(s, t) {
    var alphabet_orders = [];

    var alphabet_orders_2 = [];

    for( let i = 0; i < s.length; i++ ) {
        if( ! alphabet_orders.hasOwnProperty( s[i] ) && ! alphabet_orders_2.hasOwnProperty( t[i] ) ) {
          alphabet_orders[s[i]] = 1;
          alphabet_orders_2[t[i]] = 1;
        } else {
            alphabet_orders[s[i]]++; 
            alphabet_orders_2[t[i]]++;     
        }
    }
    console.log(alphabet_orders);
    console.log(alphabet_orders_2);
    
    // for( let i = 0; i < s.length; i++ ) {
    //     if( alphabet_orders[s[i]] != alphabet_orders_2[t[i]] ) {
    //         return false;
    //     } 
    // }

    // return true;
};
isIsomorphic(s, t);