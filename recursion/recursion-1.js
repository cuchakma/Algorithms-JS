function Test(n){
    if( n <= 1 ){
        return n;
    }
    return Test(n-1) + Test(n-2);
}

console.log(Test(4));