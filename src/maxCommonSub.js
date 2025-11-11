/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
 if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return '';
  }
  let maxSub = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      const subStr = str1.slice(i, j);
      if (str2.includes(subStr) && subStr.length > maxSub.length) {
        maxSub = subStr;
      }
    }
  }
  return maxSub;
};
