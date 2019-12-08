class Solution {
    public int maxDepth(TreeNode root) {

        if (root == null) {
            return 0;
        } else {
            int leftDepth = maxDepth(root.left);
            int rightDepth = maxDepth(root.right);

            int num = leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
            return num;
        }
    }
}