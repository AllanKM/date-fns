var startOfDay = require('./start_of_day')

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 */
var isYesterday = function(dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() == startOfDay(yesterday).getTime()
}

module.exports = isYesterday

