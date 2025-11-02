/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
let a = Math.min(Number(start), Number(end));
let b = Math.max(Number(start), Number(end));

let sum = 0;
for (let i = a; i <= b; i++) {
  sum += i;
};
return sum;
};