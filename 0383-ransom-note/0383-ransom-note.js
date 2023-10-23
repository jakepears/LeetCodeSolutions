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