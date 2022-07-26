let findMaxSlidingWindow = function(nums, windowSize) {
    let result = [];
    
    if(nums.length == 0) {
      return result;
    }
    // If window_size is greater than the array size,
    // set the window_size to nums.size()
    if (windowSize > nums.length) {
      windowSize = nums.length;
    }
    // Initializing doubly ended queue for storing indices using array
    let window = [];
  
    //find out max for first window
    for (let i = 0; i < windowSize; i++) {
      // For every element, remove the previous smaller elements from window
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      } 
      // Add current element at the back of the queue
      window.push(i);
    }
    // Appending the largest element in the window to the result
    result.push(nums[window[0]])
    
    for (let i = windowSize; i < nums.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
      while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
        window.pop();
      }
      
      // Remove first index from the window deque if 
      // it doesn't fall in the current window anymore
      if (window.length > 0 && (window[0] <= i - windowSize)) {
        window.shift();
      }
      // Add current element at the back of the queue
      window.push(i);
      result.push(nums[window[0]]);
    } 
    return result;
  };