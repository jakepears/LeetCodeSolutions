/**
 * [409] Longest Palindrome
 *
 * @format
 * @lc app=leetcode id=409 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
	const map = {};
	for (const char of s) {
		map[char] = map[char] + 1 || 1;
	}
	let count = 0;
	for (const key in map) {
		count += Math.floor(map[key] / 2) * 2;
	}
	return count < s.length ? count + 1 : count;
};
// @lc code=end
