const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  const separator = options.separator || '+';
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  if (!repeatTimes) {
    return `${str}${addition}`;
  }

  for (let i = 0; i < repeatTimes; i++) {
    let additionResult = '';
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionResult += addition + additionSeparator;
    }
    additionResult = additionResult.split('').splice(0, additionResult.length - additionSeparator.length).join('');
    result += str + additionResult + separator;
  }

  result = result.split('').splice(0, result.length - separator.length).join('');

  return result;
}

module.exports = {
  repeater
};
