/**
 * Divide And Conquer Approach
 */

var a = [7, 6, 10, 5, 9, 2, 1, 15, 7];


function QuickSortPartition( numbers, i, j ) {
    var pivot = numbers[0];
    let temp;
    while( i < j ) {
        while( numbers[i] <= pivot ) {
            i++;
        }

        while( numbers[j] > pivot ) {
            j--;
        }

        if( i < j ) {
            temp       = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
    temp       = numbers[j];
    numbers[j] = pivot;
    numbers[0] = temp;
    return j;
}



function QuickSort(numbers, i, j){
    if( i >= j ) {
        return;
    }
    let location = QuickSortPartition( numbers, i, j );
    QuickSort( numbers, i, location - 1 );
    QuickSort( numbers, location + 1, j );
}

QuickSort(a, 0, a.length - 1);