public class Solution {
    public int MaxDepth(TreeNode root) {
        
        if (root == null)
            return 0;
        else{
            int leftDepth = MaxDepth(root.left);
            int rightDepth = MaxDepth(root.right);
            
            return leftDepth < rightDepth ? rightDepth + 1 : leftDepth + 1;
        }
        
    }
}