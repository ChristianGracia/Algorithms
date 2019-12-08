/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public int maxDepth(TreeNode root) {

        int max = getMaxDepth;
        return max;
    }

    public int getMaxDepth(TreeNode root) {
        int counter = 0;
        int max = 0;

        while (true)
            if (root.left != null) {
                trav = root.left;
                counter++;
            } else if (root.right != null) {
                trav = root.right;
                counter++;
            } else {
                if (counter > max) {
                    max = counter;
                }
                counter = 0;

            }

    }
}