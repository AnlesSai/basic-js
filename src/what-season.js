const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  let monthNum = date.getMonth();
  if ((monthNum >= 0 && monthNum <= 1) || monthNum == 11) {
    return "winter"
  };
  if (monthNum >= 2 && monthNum <= 4) {
    return 'spring'
  }
  if (monthNum >= 5 && monthNum <= 7) {
    return 'summer'
  }
  if (monthNum >= 8 && monthNum <= 10) {
    return 'fall'
  }
}

module.exports = {
  getSeason
};
