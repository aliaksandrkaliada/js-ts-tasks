/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map(num => {
    if (typeof num !== 'number') return num;
    const length = Math.abs(num).toString().length;
    if (length === 1) return 1;
    if (length === 2) return 2;
    if (length === 3) return 3;
    return 4;
  }); 
};
