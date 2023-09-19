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
var hasCycle = function(head) {
    let slow = head;
  let fast = head;

  while (fast && fast.next) {

    // Move slow by 1, fast by 2
    slow = slow.next;
    fast = fast.next.next;

    // If fast catches slow, return true
    if (slow === fast) return true;
  }
  
  // If fast hits null, no cycle
  return false;
};