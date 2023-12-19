const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};

  if (domains.length === 0) {
    return object;
  }

  for (let i = 0; i < domains.length; i++) {
    let domain = `.${domains[i].split('.').reverse()[0]}`;
    let secondPart = `.${domains[i].split('.').reverse().join('.')}`;

    for (let j = 0; j < secondPart.length; j++) {
        object[domain] = 0;
        object[secondPart] = 0;
    }
  }

  domains.map(element => {
    element = `.${element.split('.').reverse().join('.')}`
    for (let key in object) {
        if (element.includes(key)) {
          object[key] += 1;
        }
    }
  })

  return object;
}

module.exports = {
  getDNSStats
};
