// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const lib1 = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    const lib2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
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

    if (encode) {
    
      let result = ""; 
      let texts = input.toLowerCase();
      for (let i =0; i < texts.length; i++){
        let text = texts[i]
        if (text.match(/[a-z]/)) {
          if (text === "i" || text === "j") {
            result += "42";
          } else {
            let num = lib2.indexOf(text);
            result += lib1[num];
          }
        } else {
          result += text;
        }
      }
      return result;
    } else {
      let messageArr = input.split(" ");
      let lettersArr = [];
      for (word of messageArr) {
        lettersArr.push(word.match(/.{2}/g));
      }
      let isEven = messageArr.every((word) => word.length % 2 === 0);

      if (!isEven) {
        return false;
      }
      let finalArr = [];
      for (word of lettersArr) {
        let tempArr = [];
        for (letters of word) {
          if (letters === "42") {
            tempArr.push("(i/j)");
          } else {
            let number = lib1.indexOf(letters);
            let something = lib2[number];
            tempArr.push(something);
          }
        }
        finalArr.push(tempArr);
      }
      let decodedArr = [];
      for (word of finalArr) {
        let value = word.join("");
        decodedArr.push(value);
      }
      let final = decodedArr.join(" ");
      return final;
    }

    
  }

  polybius("jiggle", true);
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
