const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!matrix || matrix.length === 0) {
    return 0;
  }

  let catCount = 0;

  for (const row of matrix) {
    for (const element of row) {
      if (element === "^^") {
        catCount++;
      }
    }
  }

  return catCount;
}

module.exports = {
  countCats,
};
