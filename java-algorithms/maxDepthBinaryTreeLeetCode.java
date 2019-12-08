
class Solution {
    public int maxDepth(TreeNode root) {

        int max = 0;
        int counter = root == null ? 0 : 1;

        TreeNode trav = root;
        TreeNode prev = null;

        trav = trav.left;
        prev = trav;
        if (trav.left != null) {
            trav = trav.left;
            counter++;
        } else if (trav.right != null) {
            trav = trav.right;
            counter++;
        } else {
            counter--;
            if (prev.right != null) {
                trav = prev.right;

            } else {
                return counter;
            }

        }
        return counter;
    }

}
