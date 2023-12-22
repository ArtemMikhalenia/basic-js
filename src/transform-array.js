const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

   let newArr = [...arr];
   let result = [];

   const discardNext = '--discard-next';
   const discardPrev = '--discard-prev';
   const doubleNext = '--double-next';
   const doublePrev = '--double-prev';

   if (!newArr.includes(discardNext) &&
      !newArr.includes(discardPrev) &&
      !newArr.includes(doubleNext) &&
      !newArr.includes(doublePrev)) {
      return newArr;
   }

   for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] instanceof Object) {
         return newArr;
      }
      if (newArr[i] === discardNext) {
         i++;
      } else if (newArr[i] === discardPrev) {
         if (result.length > 0 && newArr[i - 2] !== discardNext) result.pop();
      } else if (newArr[i] === doublePrev) {
         if (i - 1 >= 0 && newArr[i - 2] !== discardNext) result.push(newArr[i - 1]);
      } else if (newArr[i] === doubleNext) {
         if (i + 1 < newArr.length) result.push(newArr[i + 1]);
      } else {
         result.push(newArr[i]);
      }
   }

   return result;
}

module.exports = {
  transform
};
