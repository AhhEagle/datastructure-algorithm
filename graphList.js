class Node{
    constructor(label){
        this.label = label;
        this.list = [];
    }

    addAdjancent(node){
        this.list.push(node);
    }
    
    getAdjancents(){
        return this.list;
    }
    
    removeAdjancent(node){
        const index = this.list.indexOf(node);
        return this.list.splice(index, 1)
    }

    isAdjacent(node){
        return this.list.indexOf(node) > -1;
    }
}