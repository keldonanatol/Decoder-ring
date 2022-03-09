// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let doesRepeat = /(.).*\1/.test(alphabet);
    if (doesRepeat) return false;
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    const lib1 = alphabet.split("");
    const lib2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];


    function _translate(libA, libB) {
      let result = ""; 
      let text = input.toLowerCase();
      for (let i = 0; i < text.length; i++) {
        let letters = text[i];
        if (letters.match(/[^ ]/)) {

          let number = libA.indexOf(letters);
          result += libB[number];
        } else {
          result += letters;
        }
      }
      return result;
    }

    if (encode) {
      let sum = _translate(lib2, lib1);
      return sum;
    } else {
      let sum = _translate(lib1, lib2);
      return sum;
    }
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
