const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
let result;

  if (!Array.isArray(members)) {
  return false;
} else if (members.length === 0) {
  return [];
}

result = members
  .map(el => {
     if (typeof el === 'string') {
        el = el.trim();
        return (el[0] === el[0].toLowerCase()) ? el[0].toUpperCase() : el[0];
     }
  })
  .sort()
  .join('')

  return result;
}

module.exports = {
  createDreamTeam
};
