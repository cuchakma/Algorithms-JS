var stock_prices = [10, 7, 5, 8, 11, 9];
let i = 0;

while( i < stock_prices.length - 1 ) {  
 
        // Find Local Minima
        // Note that the limit is (n-2) as we are
        // comparing present element to the next element
        while ((i <  stock_prices.length - 1) && (stock_prices[i + 1] <= stock_prices[i])) {
            i++;
        }

        // If we reached the end, break
        // as no further solution possible
        if (i == stock_prices.length - 1) {
            break;
        }

        // Store the index of minima
        var buy = i++;

        // Find Local Maxima
        // Note that the limit is (n-1) as we are
        // comparing to previous element
        while ((i < stock_prices.length) && (stock_prices[i] >= stock_prices[i - 1])) {
            i++;
        }

        // Store the index of maxima
        var sell = i - 1;
}
console.log(buy);
console.log(sell);