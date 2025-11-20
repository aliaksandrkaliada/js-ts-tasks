/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (lowestNumber, upperNumber) {
    const result = [];

    const isPrime = num => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const max = Math.min(highestNumber, upperNumber);

    for (let i = lowestNumber; i <= max; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }

    return result;
  };
};
