class Array{
    constructor(){
        this.list = [];
    }
    insert(value){
     this.list.push(value);
    }
    removeAt(index){
        if (index > this.list.length){
            return -1
        }
    this.list[index] = 0;
    return this.list;
    }
}

const permute = (nums) => {
    const res = [];
  
    const go = (cur, rest) => {
      if (rest.length === 0) {
        res.push(cur);
        return;
      }
  
      for (let i = 0; i < rest.length; i++) {
        // note if using array push and splice here, it will cause mutation
        go(
          [...cur, rest[i]],
          [...rest.slice(0, i), ...rest.slice(i + 1)],
        );
      }
    };
  
    go([], nums);
    return res;
  };

  const newPermute = (nums) =>{
      let result = [];
      let temp = [];

      findPermutation(temp, nums, result);
      return result;
  }

  let findPermutation = (temp, nums, result)=>{
        if(!nums.length){
             result.push(temp.concat());
             return;
        }

        for(let i =0; i<nums.length; i++){
           console.log("maybe this will better explain it: " + nums);
           console.log(i + " " + nums[i] );
            const newNumber = nums[i];
            temp.push(newNumber);
            nums.splice(i, 1);
          findPermutation(temp, nums, result);
           console.log(temp + " nums: " + nums + " result: " + result);
           let popped = temp.pop();
         console.log("THis was popped: " + popped);
           nums.splice(i, 0, newNumber);
          console.log("new number: " + nums + " " + i);
          
        }
  }

//newPermute([1,2,3]);


// let test = new Array();
// test.insert(6);
// test.insert(7);
// test.insert(8);
// test.insert(9);
// console.log(test.removeAt(0));
// console.log(test);

//console.log(permute([1,2,3]))