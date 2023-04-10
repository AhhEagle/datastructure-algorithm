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
    
    if (key == null){
      return false; //null key
    }
    
    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;
    
    //Iterate the Trie with given character index,
    //If it is null at any point then we stop and return false
    //We will return true only if we reach leafNode and have traversed the
    //Trie based on the length of the key
    
    for (var level=0; level<key.length; level++){ 
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null){
        return false;
      }
      currentNode = currentNode.children[index];
    }                                             
    if (currentNode != null && currentNode.isEndWord){
      return true;
    }
    return false; 
  }
    
  //Function to search a given key in Trie
  search(key){
    return false; 
  }
  
 //Function to delete given key from Trie
 delete(key){
  if (this.root == null || key == null){
   console.log("None key or empty trie error");
   return;
  }
 
  this.deleteHelper(key, this.root, key.length, 0);
}
  //Helper Function to return true if currentNode does not have any children
  hasNoChildren(currentNode){
    for (var i=0; i<currentNode.children.length; i++){ 
      if (currentNode.children[i] != null)
        return false;
    }
    return true;
  }

   //Recursive function to delete given key
   deleteHelper(key, currentNode, length, level){
    let deletedSelf = false;
         
    if (currentNode == null){
      console.log("Key does not exist");
      return deletedSelf;
    }
    
    //Base Case: If we have reached at the node which points to the alphabet at the end of the key.
    if (level == length){
      //If there are no nodes ahead of this node in this path
      //Then we can delete this node
      if (this.hasNoChildren(currentNode)){
        currentNode = null;
        deletedSelf = true;
      }
      
      //If there are nodes ahead of currentNode in this path 
      //Then we cannot delete currentNode. We simply unmark this as leaf
      else{
        currentNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    }
    else{
      let childNode = currentNode.children[this.getIndex(key[level])];
      let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
      if (childDeleted){
        //Making children pointer also None: since child is deleted
        currentNode.children[this.getIndex(key[level])] = null;
        //If currentNode is leaf node that means currentNode is part of another key
        //and hence we can not delete this node and it's parent path nodes
        if (currentNode.isEndWord)
          deletedSelf = false;
        
        //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
        //So, we cannot delete currenNode
        else if(this.hasNoChildren(currentNode) == false)
          deletedSelf = false;
        
        //Else we can delete currentNode
        else{
          currentNode = null;
          deletedSelf = true;
        }
      }  
      else
        deletedSelf = false;
    }  
    return deletedSelf
  }

  totalWords(rootN){
  let result = 0;
  
  // Leaf denotes end of a word
  if (rootN.isEndWord){
    result += 1;
  }
  
  for (var i=0; i<26; i++){ 
    if (rootN.children[i] != null){
      result += totalWords(rootN.children[i]);
    }
  }
  return result;
}

//Recursive Function to generate all words
getWords(root, result, level, string){

  //Leaf denotes end of a word
  if (root.isEndWord){
    //current word is stored till the 'level' in the character array
    let temp = "";
    for (var x=0; x<level; x++){
      temp += String(string[x]);
    }
    result.push(temp);
  }
  for(var i=0; i<26; i++){ 
      if (root.children[i] != null){
        //Non-None child, so add that index to the character array
        string[level] = String.fromCharCode(i + "a".charCodeAt(0));
        getWords(root.children[i], result, level + 1, string);
      }
  }
}

findWords(root){
  let result = [];
  let chararr = [];
  for(var i=0; i<20; i++){
    chararr.push(null);
  }
  getWords(root, result, 0, chararr);
  return result;
}


//Recursive Function to generate all words in alphabetic order
getWords(root,result,level,word){
  //Leaf denotes end of a word
  if (root.isEndWord){
    //current word is stored till the 'level' in the character array
    let temp = "";
    for (var x=0; x<level; x++){ 
      temp += word[x];
      //console.log("pushing", word[x]);
    }                          
    result.push(temp);
  }
  
  for (var i=0; i<26; i++){ 
    if (root.children[i] != null){
      //Non-null child, so add that index to the character array
      word[level] = String.fromCharCode(i + "a".charCodeAt(0));
      getWords(root.children[i], result, level + 1, word);
    }
  }
}
sortArray(arr){
  let result = [];
  //Creating Trie and Inserting words from array
  let trie = new Trie();
  for (var x=0; x<arr.length; x++){ 
    //console.log("inserting", arr[x]);
    trie.insert(String(arr[x]), x);
  }
  
  let word = [];
  for(var i=0; i<26; i++){
    word.push('');
  }
  getWords(trie.root, result, 0, word);
  return result;
}

 isFormationPossible(dict,word){
  // Insert all the words from dict in the trie
  let trie = new Trie()
  for (var i=0; i<dict.length; i++){
    trie.insert(dict[i])
  }
  // Get the pointer to the root of the trie
  let currentNode = trie.root;
  // iterate over the word
  for (var i=0; i<word.length; i++){
    let char = trie.getIndex(word[i]);
    // if the prefix of word does not exist, word would not either
    if (currentNode.children[char] == null){
      return false;
    }
    // if the substring of the word exists as a word in trie, check whether rest of the word also exists, if it does return true
    else if (currentNode.children[char].isEndWord == true && trie.search(word.substring(i+1))){
      return true
    }
    currentNode = currentNode.children[char]
  }
}





}  