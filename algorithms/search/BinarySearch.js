const compare = require('./../../util/Compare');

/**
 * Searches and returns the index of the given element.
 * Returns -1 if the element doesn't exist within the array.
 *
 * Time complexity (worst/average): O(log(n))
 *
 * @param  {Array} arr  sorted Array (unsorted arrays give a undefined result)
 * @param  {Any} elem element to perform the search on
 * @return {Integer}      index corresponding with the given element, or -1 if element isn't found
 */
module.exports = (arr, elem, comparator) => {
  let min = 0;
  let max = arr.length - 1;
  let i;
  while (min <= max) {
    i = Math.floor((max + min) / 2);
    if (compare(arr[i], elem, comparator) === 0) return i;
    if (compare(arr[i], elem, comparator) === -1) {
      min = i + 1;
    } else {
      max = i - 1;
    }
  }
  return -1;
};
