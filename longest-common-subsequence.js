let sub1 = 'aggtab';
let sub2 = 'gxtxayb';

let map = [];

for( let i = 0; i < sub1.length; i++ ) {
   map[i] = new Array( sub2.length );
}

for( let i = 0; i < sub1.length; i++ ) {
    let first_char = sub1[i];
    for( let j = 0; j < sub2.length; j++ ) {
        if( first_char == sub2[j] ) {

        } else {
            if( map[i][j-1] == undefined ) {
                map[i][j] = 0;
            }
            console.log(map[i-1][j]);
            // if( map[i-1][j] == undefined ) {
            //     map[i][j] = 0;
            // }
        }
    }
}


//console.log(map);


