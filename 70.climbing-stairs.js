/**
 * [70] Climbing Stairs
 *
 * @format
 * @lc app=leetcode id=70 lang=javascript
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
	const dp = [0, 1, 2];
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
git;
// @lc code=end
