/**
 * [141] Linked List Cycle
 *
 * @format
 * @lc app=leetcode id=141 lang=javascript
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
	if (!head) return false;
	let slow = head;
	let fast = head.next;
	while (slow !== fast) {
		if (!fast || !fast.next) return false;
		slow = slow.next;
		fast = fast.next.next;
	}
	return true;
};
// @lc code=end
