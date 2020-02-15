/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// iterative algorithm
var search = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        let mid = Math.floor(left + ((right - left) / 2));
  
        if(nums[mid] === target){
            return mid;
        }else if(target < nums[mid]){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    
    return -1;
    
};

// recursive algorithm
var search = function(nums, target, left, right) {
    
    if(left == null) left = 0;
    if(right == null) right = nums.length -1
    
    if(left > right){
        return -1;
    }

    let mid = Math.floor(left + ((right - left) / 2));
    if(nums[mid] === target){
        return mid;
    }else if(target < nums[mid]){
        right = mid-1;
    }else{
        left = mid+1;
    }

    search(nums, target, left, right);
};


