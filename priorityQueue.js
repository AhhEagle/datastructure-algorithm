function PriorityQueue(){
    let collection = [];
    this.printCollection =  function(){
        console.log(collection)
    };
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        } else {
            let added = false;
            for(let i=0; i<collection.length; i++){
                if(element[1] < collection[i][1]){ // to check priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };
    
}