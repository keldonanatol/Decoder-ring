// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (!encode) shift *= -1; 

    
    const text = input.toLowerCase();

    let result = "";

    
    for (let i = 0; i < text.length; i++) {
      let sent = text[i];

      if (sent.match(/[a-z]/)) {
      
        let number = text.charCodeAt(i) + shift;

        if (number > 122) {
          number = number - 26;
        }
        if (number < 97) {
          number = number + 26;
        }
        let receive = String.fromCharCode(number);
        result += receive;
      } else {
        result += sent;
      }
    }
    return result; 
  }

  return {
    caesar,
  };
})();
  

module.exports = { caesar: caesarModule.caesar };
