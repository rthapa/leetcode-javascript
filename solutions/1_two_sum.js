/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let map = {};
    
    for(let i=0; i<nums.length; i++){
        let difference = target - nums[i];
        if(difference in map)
        {
            result[0] = i;
            result[1] = map[difference];
            return result;
        }
        
        map[nums[i]] = i;
        
    }
};