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
var rightSideView = function(root) {
    
    if(!root) return [];
    
    let output = [];
    const queue = [root];
    
    while(queue.length > 0){
        let size = queue.length;
        for(let i=0; i<size; i++){
            const current = queue.shift();
            
            if(i == (size-1)) output.push(current.val);
            
            
            if(current.left != null) queue.push(current.left);
            if(current.right != null) queue.push(current.right);
        }
    }
    
    return output;
};