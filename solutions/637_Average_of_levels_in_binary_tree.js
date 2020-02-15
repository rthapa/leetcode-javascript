/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    if(!root){
        return []
    }

    const result = [] 
    const queue = [root];
    
    let level_sum = 0;
    while(queue.length > 0){
        level_sum = 0;
        
        let size = queue.length;
        for(let i = 0; i<size; i++){
            const current = queue.shift();
            level_sum += current.val;
            
            if(current.left != null) queue.push(current.left); 
            if(current.right != null) queue.push(current.right);
            
        }
        
        let level_avg = level_sum / size;
        result.push(level_avg);
    }

    return result;
};
