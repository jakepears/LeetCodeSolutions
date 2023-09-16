/**
 * [125] Valid Palindrome
 *
 * @format
 * @lc app=leetcode id=125 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const reverseString = newString.split('').reverse().join('');
	return newString === reverseString;
};
// @lc code=end
