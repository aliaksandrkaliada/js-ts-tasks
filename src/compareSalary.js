/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
let max = Math.max(firstSalary, secondSalary, thirdSalary);
let min = Math.min(firstSalary, secondSalary, thirdSalary);
return max - min;
};
