class TrieNode{
    constructor() {
       this.children = {};
    }
}

class Trie{

    constructor() {
        this.trie_node = new TrieNode();
    }

    insert( word ) {
        let node = this.trie_node.children;
        for( let i = 0; i < word.length; i++ ){
            if( node[word[i]] == undefined ) {
                var newNode   = new TrieNode().children;
                node[word[i]] = newNode;
                node          = newNode;
            } else {
                node = node[word[i]];
            }
        }
        Object.assign(node, {complete:true});
    }

    get_common_prefix() {
        let node = this.trie_node.children;
        let common_prefix = ''
        while( Object.values( node ).length > 0 && Object.values( node ).length < 2 && Object.values( node )[0] != true ) {
            common_prefix += Object.keys(node)[0];
            node = Object.values( node )[0];
        } 
        return common_prefix != '' && common_prefix != 'complete' ? common_prefix : '';
    }
}



let words = ["", ""];
let root  = new Trie();

for( let i = 0; i < words.length; i++ ) {
    root.insert(words[i]);
}

console.log( root.get_common_prefix() );