/** Merge Sort **/
let array = [9, 3, 7, 5, 6, 4, 8, 2];

function MergeSort(low, high) {
    if( low < high) {
        let mid_point;
        let left_half;
        let right_half;
        mid_point = Math.floor( (low + high) / 2 );
        left_half = MergeSort(low, mid_point);
        right_half = MergeSort(mid_point+1, high);
    }
}

MergeSort(0, array.length - 1);