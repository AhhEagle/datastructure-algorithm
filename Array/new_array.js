let findMaxSlidingWindow = function (nums, windowSize) {
  let result = [];

  if (nums.length == 0) {
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
  result.push(nums[window[0]]);

  for (let i = windowSize; i < nums.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }

    // Remove first index from the window deque if
    // it doesn't fall in the current window anymore
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift();
    }
    // Add current element at the back of the queue
    window.push(i);
    result.push(nums[window[0]]);
  }
  return result;
};
//Anagrams in an array
function getCharCount(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  return charCount;
}

function allAnagrams(strings) {
  if (strings.length === 0) {
    return true;
  }

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length !== strings[0].length) {
      return false;
    }
  }

  const firstCharCount = getCharCount(strings[0]);

  for (let i = 1; i < strings.length; i++) {
    const thisCharCount = getCharCount(strings[i]);

    for (const char in thisCharCount) {
      if (thisCharCount[char] !== firstCharCount[char]) {
        return false;
      }
    }
  }

  return true;
}

//Rotate array matrix
function rotateClockwise(matrix) {
  const newMatrix = matrix[0].map(() => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }

  return newMatrix;
}

function rotate180(matrix) {
  return rotateClockwise(rotateClockwise(matrix));
}

function rotateCounterClockwise(matrix) {
  return rotateClockwise(rotate180(matrix));
}
