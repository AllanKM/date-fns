var parse = require('./parse')

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 */
var isFuture = function(dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture

