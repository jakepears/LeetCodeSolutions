/**
 * [383] Ransom Note
 *
 * @format
 * @lc app=leetcode id=383 lang=javascript
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
	const map = {};
	for (const char of magazine) {
		map[char] = map[char] ? map[char] + 1 : 1;
	}
	for (const char of ransomNote) {
		if (!map[char]) {
			return false;
		}
		map[char] -= 1;
	}
	return true;
};
// @lc code=end
