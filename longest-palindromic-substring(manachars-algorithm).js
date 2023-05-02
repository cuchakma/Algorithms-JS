let string = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';

// let string = "racecar";

/*** 
 * 
 * Brute Force Solution 
 * 
 */
// function longestPalindrome(s) {
//     let substring = '';
//     let reverse_substring;
//     let max_substring = '';
//     for( let i = 0; i < s.length; i++ ) {
//         let j = i;
//         while( j < s.length ) {
//             substring += s[j];
//             reverse_substring = substring.split('').reverse().join('');
//             if( substring == reverse_substring && substring.length > max_substring.length) {
//                 max_substring = substring;
//             }
//             j++;
//         }
//         substring = '';
//     }
//     return max_substring;
// }

// console.log(longestPalindrome(string));

// Optimizer Solution
function longestPalindrome(s) {
    
    if(s.length <= 1){ 
        return s;
    }

    let max_length = 0;
    let start = 0;
    let end = 0;

    for(let i = 0; i < s.length - 1; i++) {
        let l = i;
        let r = i;
        while( l >= 0 && r < s.length ) {
            if( s[l] == s[r] ) {
                r += 1;
                l -= 1;
            } else {
                break;
            }
        }
        let length = (r - l - 1);
        if( length > max_length ) {
            max_length = length;
            start = l+1;
            end = r - 1;
        }  
    }

    // Even length string solution
    for(let i = 0; i < s.length - 1; i++) {
        let l = i;
        let r = i + 1;
        while( l >= 0 && r < s.length ) {
            if( s[l] == s[r] ) {
                r += 1;
                l -= 1;
            } else {
                break;
            }
        }
        let length = (r - l - 1);
        if( length > max_length ) {
            max_length = length;
            start = l+1;
            end = r - 1;
        }  
    }
    
    return s.substr(start, max_length);

}

console.log(longestPalindrome(string));