/**
 * [704] Binary Search
 *
 * @format
 * @lc app=leetcode id=704 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (!nums || nums.length === 0) return -1;
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		const mid = (left + right) >> 1;
		if (nums[mid] === target) return mid;
		if (nums[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
};
// @lc code=end
