/**
 * [242] Valid Anagram
 *
 * @format
 * @lc app=leetcode id=242 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	const map = {};
	for (let i = 0; i < s.length; i++) {
		map[s[i]] = (map[s[i]] || 0) + 1;
	}
	for (let i = 0; i < t.length; i++) {
		if (!map[t[i]]) {
			return false;
		}
		map[t[i]]--;
	}
	return Object.values(map).every((v) => v === 0);
};
// @lc code=end
