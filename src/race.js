/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    // Итерируем все промисы
    for (const promise of promisesArray) {
      // Каждый промис подписываем на resolve/reject
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    }
  });
};
