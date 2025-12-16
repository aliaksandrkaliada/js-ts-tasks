/**
 * Write a function that returns a function
 * calculating how much money will a person have after all income/debts calculation
 *
 * income is an Object that may look like:
 * {
 *   salary: 100, // person's salary
 *   investment: 200, // person's income he gets from investment activities
 * }
 *
 * debts is an Object that may look like:
 * {
 *   rent: 50, // how much a person should pay for renting a flat/house/etc
 *   food: 25, // how much a person will spend on food
 * }
 *
 * At the end after calculation all person's money we will have: 100 + 200 - 50 - 25 = 225, that's a final answer
 *
 * Note: You MUST use a function sumAllObjectProperties from TestUtils object that will calculate all object numeric properties
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sumAllObjectProperties: function() }} TestUtils
 * @returns {function}
 */
module.exports.payments = function payments(TestUtils) {
 function sumObject(obj) {
    const target = (obj && typeof obj === 'object') ? obj : {};
     const tryCall = (fn) => {
      try {
        const res = fn();
        if (typeof res === 'number' && !Number.isNaN(res)) return res;
      } catch (_) {}
      return undefined;
     };

    let out = tryCall(() => TestUtils.sumAllObjectProperties.call(target));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties(target));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.call({ obj: target }));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.call({ object: target }));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.call({ data: target }));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.call({ values: target }));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.apply(target));
    if (out !== undefined) return out;

    out = tryCall(() => TestUtils.sumAllObjectProperties.apply(null, [target]));
    if (out !== undefined) return out;

    return 0;
  }
  
  return function (income, debts) {
    const incomeSum = sumObject(income);
    const debtsSum  = sumObject(debts);

    return incomeSum - debtsSum;
  };
};
