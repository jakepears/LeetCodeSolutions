/**
 * [235] Lowest Common Ancestor of a Binary Search Tree
 *
 * @format
 * @lc app=leetcode id=235 lang=javascript
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
	if (root === null) return null;
	if (root.val > p.val && root.val > q.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (root.val < p.val && root.val < q.val) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};
// @lc code=end
