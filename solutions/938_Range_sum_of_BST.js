/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    let sum = 0;
    
    if(root == null) return sum;
    
    const queue = [root];
    while(queue.length > 0){
        
        for(let i=0; i<queue.length; i++){
            const current = queue.shift();
            
            if(current.val >= L && current.val <= R){
                sum += current.val;
            }
            
            if(current.left !== null && current.val > L) queue.push(current.left);
            if(current.right !== null && current.val < R) queue.push(current.right);
            
        }
    }
    
    return sum;
};