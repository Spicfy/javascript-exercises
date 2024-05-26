const palindromes = function (word) {
    const inc = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const str = word.toLowerCase().split('').filter((character) => inc.includes(character)).join('');
    const rev = str.split('').reverse().join('');

    return str===rev;

};

// Do not edit below this line
module.exports = palindromes;
