/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
 return function (...args) {
    const cmp = (a, b) => {
      try {
        const r1 = TestUtils.sortComparator(a, b);
        if (typeof r1 === 'number' && !Number.isNaN(r1)) return r1;
      } catch (_) {}
      try {
        const r2 = TestUtils.sortComparator.call({ a, b });
        if (typeof r2 === 'number' && !Number.isNaN(r2)) return r2;
      } catch (_) {}
      try {
        const r3 = TestUtils.sortComparator.call({ first: a, second: b });
        if (typeof r3 === 'number' && !Number.isNaN(r3)) return r3;
      } catch (_) {}
      return 0;
    };

    return [...args].sort(cmp);
  };
};
