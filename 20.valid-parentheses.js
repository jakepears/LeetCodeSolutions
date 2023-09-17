/**
 * [20] Valid Parentheses
 *
 * @format
 * @lc app=leetcode id=20 lang=javascript
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const stack = [];
	const map = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			stack.push(map[s[i]]);
		} else {
			if (stack.pop() !== s[i]) {
				return false;
			}
		}
	}
	return stack.length === 0;
};
// @lc code=end
