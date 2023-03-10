function pali(strg){
    let start = 0;
    let end = strg.length - 1;

    while (start < end){
        if(strg[start] != strg[end]){
            return false
        }
        start ++;
        end --;
    }

    return true;
}


function target(arr, target){
    //array is sorted 
    //two pointers to move through the array 
    //add the numbers if its the target return the numbers 
    //if its greater than the target, decrease the end
    //if its lesser than the target increase the start
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let curr = (arr[left] + arr[right]) ;
        if(curr == target){
            return [arr[left], arr[right]];
        }

        if(curr > target){
            right --;
        }

        
        if(curr < target){
            left ++;
        }
    }

    return false;
}



function sortTwoArrays(arr1, arr2){
    //[1,4,6] [2,3,5]
    //[1,2,3,4,5]

    let pointerone = 0;
    let pointertwo = 0;
    let result = [];

    while((pointerone < arr1.length) && (pointertwo < arr2.length)){
        if(arr1[pointerone] < arr2[pointertwo]){
            result.push(arr1[pointerone]);
            pointerone ++ ;
        } else{
            result.push(arr2[pointertwo]);
            pointertwo++; 
        }
    }

    if(pointerone < arr1.length - 1){
        arr1 = arr1.splice(0, pointerone);
        result = result.concat(arr1);
    }

    if(pointertwo < arr2.length -1 ){
        arr2 = arr2.splice(0, pointertwo);
        result = result.concat(arr2);
    }

    return result;

}



function longestSum(nums, k){
    //array of int [1,2,4,3,5]
    //k =6;
    let left = 0, curr = 0, ans = 0;
    for (let right =0; right < nums.length; right++){
        curr +=nums[right];
        while(curr > k){
            curr -=nums[left];
            left ++;
        }
        ans = Math.max(ans, right - left + 1);

    }
    return ans;
}

console.log(longestSum([1,2,4,3,5], 6));

function longestSub(str){
    //"1101100111"
    //can only flip one zero 
    let left = 0, curr = 0, ans = 0;
    for (let right =0; right < str.length; right++){
        if (str[right] == "0"){
            curr ++;
        }

        while(curr > 1){
            if(str[left] == "0"){
                curr -=1;
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
     
    } 
    return ans;   
}

console.log(longestSub([1101100111]));

function numSubarrayProductLessThanK(arr, k){
    //[10, 5, 2, 6] k =100
    if (k <=1){
        return 0;
    }
    let left = 0, ans = 0;
    curr = 1;
    for (let right =0; right < str.length; right++){
        curr *= arr[right];
        while (left <= right && curr >= k) {
            curr /= nums[left];
            left++;
        }
        
        ans += right - left + 1;
    } 
    return ans 
}


