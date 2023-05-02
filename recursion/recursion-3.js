/**
 * Print 1 to N using recursion
 * 
 * @param {int} n 
 * @param {int} j 
 * @returns 
 */
function print( n, j ) {
    if( n < 1 ) {
        return;
    }
    print( n-1, j );
    console.log(n) + "\n";
}
print(3, 3);
