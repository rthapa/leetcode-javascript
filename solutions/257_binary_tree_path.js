/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root == null){
        return [];
    }
    
    let result = [];
    
    dfs(root, "", result);
    return result;
};

function dfs(tree, path, retArr){
    path += tree.val;
    
    if(tree.left == null && tree.right == null){
        retArr.push(path);
    }
    
    if(tree.left != null){
        dfs(tree.left, path + "->", retArr)
    }
    
    if(tree.right != null){
        dfs(tree.right, path + "->", retArr)
    }
}
