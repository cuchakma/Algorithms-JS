var order = [10, 30]; // total orders
var k     = 40; // total widgets
function filledOrders(order, k) {
    let count = 0;
    order.sort(function(a, b){
        return a-b;
    });
    for( let i = 0; i < order.length; i++ ) {
        if( order[i] < k ) {
            k = k - order[i];
            count++;
        }
    }
    return count;
}
console.log(filledOrders(order, k));