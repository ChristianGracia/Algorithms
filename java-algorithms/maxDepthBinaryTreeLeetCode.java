
class Solution {
    public int maxDepth(TreeNode root) {

        int max = 0;
        int counter = root == null ? 0 : 1;
        if (counter == 0) {
            return 0;
        }

        TreeNode trav = root;
        TreeNode prev = null;

        while (trav.left != null && trav.right != null) {
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

                }

                else {
                    return counter;
                }

            }

        }

        return counter + 1;
    }

}
