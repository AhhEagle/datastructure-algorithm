//rotate array in place
function rotateClockwise(mat) {
    const totalLayers = Math.floor(mat.length / 2);
    
    for(let layer = 0; layer < totalLayers; layer++) {
      const lastIndex = mat.length - 1 - layer;
      for(let forwardIterator = layer + 1; forwardIterator < mat.length - layer; forwardIterator++) {
        const reverseIterator = lastIndex - forwardIterator + layer;
  
        let temp1 = mat[forwardIterator][lastIndex];
        mat[forwardIterator][lastIndex] = mat[layer][forwardIterator];
  
        let temp2 = mat[lastIndex][reverseIterator];
        mat[lastIndex][reverseIterator] = temp1;
  
        temp1 = mat[reverseIterator][layer];
        mat[reverseIterator][layer] = temp2;
  
        mat[layer][forwardIterator] = temp1;
      }
    }
  
    return mat;
  }

  let binarySearch = function(nums, start, end, target) {
  
    if (start > end) {
      return -1;
    }
    
    // Finding mid using floor division
    let mid = start + Math.floor((end - start) / 2);
  
    if (nums[mid] === target) {
      return mid;
    }
    
    // start to mid is sorted
    if (nums[start] <= nums[mid] && target <= nums[mid] && target >= nums[start]) {
      return binarySearch(nums, start, mid - 1, target);
    } 
    // mid to end is sorted
    else if (nums[mid] <= nums[end] && target >= nums[mid] && target <= nums[end]) {
      return binarySearch(nums, mid + 1, end, target);
    } 
    
    else if (nums[end] <= nums[mid]) {
      return binarySearch(nums, mid + 1, end, target);
    } 
    
    else if (nums[start] >= nums[mid]) {
      return binarySearch(nums, start, mid - 1, target);
    } 
    
    return -1;
  };
  
  let binarySearchRotated = function(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
  };
  

  function cyclic_sort(nums) {
    let i = 0;
    while (i < nums.length) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        i += 1;
      }
    }
    return nums;
  }

  const find_missing_number = function(nums) {
    // TODO: Write your code here
    let sorted = nums.sort((a,b)=> a-b);
    for(let i =0; i<sorted.length; i++){
        if(sorted[i+1] - sorted[i] > 1){
            return sorted[i+1] -1
        }
    }
  //  return -1;
  };
