const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 }

 encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    this.message = message.toUpperCase();
    this.key = key.toUpperCase();


    let result = "";
    let index = 0;

    for (let i = 0; i < this.message.length; i++) {
       if (this.alphabet.includes(this.message[i])) {
          result += this.alphabet[(((this.message[i].charCodeAt(0) - 65) + (this.key[index].charCodeAt(0) - 65)) % 26)];
          index++;
          if (index === this.key.length) index = 0;
       } else {
          result += this.message[i];
       }
    }
    return (this.reverse) ? result.split("").join('') : result.split("").reverse().join("");
 }

 decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    this.encryptedMessage = encryptedMessage.toUpperCase();
    this.key = key.toUpperCase();

    let result = "";
    let index = 0;

    for (let i = 0; i < this.encryptedMessage.length; i++) {
       if (this.alphabet.includes(this.encryptedMessage[i])) {
          result += this.alphabet[((this.encryptedMessage[i].charCodeAt(0) - 65) - (this.key[index].charCodeAt(0) - 65) + 26) % 26];
          index++;
          if (index === this.key.length) index = 0;
       } else {
          result += this.encryptedMessage[i];
       }
    }

    return (this.reverse) ? result.split("").join('') : result.split("").reverse().join("");
 }
}

module.exports = {
  VigenereCipheringMachine
};
