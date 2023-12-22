const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, currentDepth = 1) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let maxDepth = currentDepth;

    for (let element of arr) {
      if (Array.isArray(element)) {
        const nestedDepth = this.calculateDepth(element, currentDepth + 1);
        maxDepth = Math.max(maxDepth, nestedDepth);
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
