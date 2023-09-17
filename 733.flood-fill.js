/**
 * [733] Flood Fill
 *
 * @format
 * @lc app=leetcode id=733 lang=javascript
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
	const oldColor = image[sr][sc];
	if (oldColor === color) return image;
	const dfs = (r, c) => {
		if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return;
		if (image[r][c] === oldColor) {
			image[r][c] = color;
			dfs(r + 1, c);
			dfs(r - 1, c);
			dfs(r, c + 1);
			dfs(r, c - 1);
		}
	};
	dfs(sr, sc);
	return image;
};
// @lc code=end
