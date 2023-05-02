function print( n ) {
    if( n >= 1 ) {
        print( n - 1 );
        print( n - 2 );
        print( n - 3 );
    }
    console.log( n );
}

print( 4 );