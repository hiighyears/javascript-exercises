const palindromes = function (word) {
    const lowword = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const muck = lowword.split('').reduce((tot, currval, currindex) => {
      if (currindex >= Math.floor(lowword.length / 2)) {
        return tot;
      }
      return currval === lowword[lowword.length - 1 - currindex] ? tot : false;
    }, true);
    return muck;
  };
// Do not edit below this line
module.exports = palindromes;
