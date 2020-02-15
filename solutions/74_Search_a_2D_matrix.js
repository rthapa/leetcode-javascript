/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    if(matrix.length < 1) return false;
    
    let rows = matrix.length, columns = matrix[0].length;
       
    let left = 0, right = rows*columns - 1;
    
    while(left <= right){
        let mid = Math.floor(left + ((right - left)/2));
        let midpoint_elem = matrix[Math.floor(mid/columns)][mid%columns];
        
        if(midpoint_elem == target){
            return true;
        }else if(target < midpoint_elem){
            right = mid - 1;
        }else if(target > midpoint_elem){
            left = mid + 1;
        }
    }
    
    return false;p

};