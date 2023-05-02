var isHappy = function(n) {
    var m = n.toString().split('');

    while(m.length != 1) {

        let sum = 0;
        let i = 0;

        while( i < m.length ) {
            sum += Math.pow(parseInt(m[i]), 2);
            i++;
        }
        
        m = sum.toString().split('');
    }
    console.log(m);
    return m[0] == '1' || m[0] == '7' ? true : false;

};

let n = 7;
isHappy(n);