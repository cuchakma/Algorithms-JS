let string = 'aaaabbaa';

function LPS(string){
    let length = string.length;
    let hashmap = [];

    for( let i = 0; i < length; i++ ) {
        hashmap[i] = new Array(length);
    }

    /**
     * Single Alphabet Is Always Palindrome
     */
    for( let i = 0; i < length; i++ ) {
        console.log(hashmap[i].length);
    }


}

LPS(string);