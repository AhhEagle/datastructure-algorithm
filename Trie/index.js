const TrieNode = require('./TrieNode.js');

class Trie{
  constructor(){
    this.root = new TrieNode(''); //Root node
  }
  //Function to get the index of character 't'
  getIndex(t){
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  
  //Function to insert a key in the Trie
  insert(key){
    //None keys are not allowed
    if (key == null){
      return;
    }
    
    key = key.toLowerCase();  //Keys are stored in lowercase
    let currentNode = this.root;
    let index = 0;          //To store the character index
    
    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (var level=0; level<key.length; level++){ 
      index = this.getIndex(key[level]);
      
      if (currentNode.children[index] == null){
        currentNode.children[index] = new TrieNode(key[level]);
        console.log(String(key[level]) + " inserted");
      }
      currentNode = currentNode.children[index];
    }
      
    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }
    
    
  //Function to search a given key in Trie
  search(key){
    return false; 
  }
  //Function to delete given key from Trie
  delete(key){
    return;
  }
}  