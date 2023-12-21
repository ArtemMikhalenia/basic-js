const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' ||
      position < 1 ||
      position > this.result.length ||
      Math.floor(position) !== position
    ) {
      this.result = [];
      throw Error("You can\'t remove incorrect link!");
    }

    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const finish = this.result.join("~~");
    this.result = [];
    return finish;
  },
};

module.exports = {
  chainMaker
};
