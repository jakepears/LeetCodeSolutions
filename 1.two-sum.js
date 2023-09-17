/**
 * [1] Two Sum
 *
 * @format
 * @lc app=leetcode id=1 lang=javascript
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[target - nums[i]] !== undefined) {
			return [map[target - nums[i]], i];
		}
		map[nums[i]] = i;
	}
	return [-1, -1];
};
// @lc code=end
