/**
 * Print N to 1 numbers using recursion
 * 
 * @param {in} n 
 * @param {int} j 
 */
function print(n, j) {
    if( n > 10 ) {
        return;
    }
    print( n+1, j );
    console.log(n)+"\n";
}

print(1, 1);