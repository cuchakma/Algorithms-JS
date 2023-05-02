let graph = {
    a:['c', 'b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

/*** DFS Uses Stack ***/
let stack = [];
let visited = [];
stack.push('a');

while(stack.length != 0) {
    let value = stack.pop();

    console.log(value);

    for( let i = 0; i < graph[value].length; i++ ) {
        stack.push(graph[value][i]);
    }
}