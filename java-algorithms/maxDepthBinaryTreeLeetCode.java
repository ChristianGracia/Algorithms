/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        int counter = 0;
        if (root.left != null) {
            trav = root.left;
            counter++;
        } else if (root.right != null) {
            trav = root.right;
            counter++;
        }

    }
}