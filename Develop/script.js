// Assignment code here
var numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ["?", "/", ".", ">", "<", ",", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfCharacters = window.prompt('How many characters would you like your password to contain?');

  if (numberOfCharacters === null) {
    window.alert('When you are ready to create a new password, please re-click the generate password button below.');
    return;
  };

  numberOfCharacters = parseInt(numberOfCharacters);
  
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128 ) {

    var selectedCharacters = [];

    function generatePassword() {
      var special = window.confirm('Click OK if you want to include Special Characters.');
      console.log(special);

      var numeric = window.confirm('Click OK if you want to include Numberic Characters.');
      console.log(numeric);

      var lower = window.confirm('Click OK if you want to include Lower Case Characters.');
      console.log(lower);

      var upper = window.confirm('Click OK if you want to include Upper Case Characters.');
      console.log(upper);

      if ( special === true && numeric === true && lower === true && upper === true ) {
        window.alert('ALL TRUE');
        // var newPassword = [];

        // return newPassword;
      }
// TESTED GOOD
      else if (special === true && numeric === false && lower === false && upper === false) {
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        }
      }
      else if (special === false && numeric === true && lower === false && upper === false) {
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(numberCharacters[Math.floor(Math.random() * numberCharacters.length)]);
        }
      }
      else if (special === false && numeric === false && lower === true && upper === false) {
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]);
        }
      }
      else if (special === false && numeric === false && lower === false && upper === true) {
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(upperCharacters[Math.floor(Math.random() * upperCharacters.length)]);
        }
      }
// TESTED GOOD
      else if (special === true && numeric === true && lower === false && upper === false) {
        var specialNumberArr = specialCharacters.concat(numberCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(specialNumberArr[Math.floor(Math.random() * specialNumberArr.length)]);
        }
      }
      else if (special === true && numeric === false && lower === true && upper === false) {
        var specialLowerArr = specialCharacters.concat(lowerCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(specialLowerArr[Math.floor(Math.random() * specialLowerArr.length)]);
        }
      }
      else if (special === true && numeric === false && lower === false && upper === true) {
        var specialUpperArr = specialCharacters.concat(upperCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(specialUpperArr[Math.floor(Math.random() * specialUpperArr.length)]);
        }
      }

      else if (special === true && numeric === false && lower === true && upper === true) {
        window.alert('SPECIAL / LOWER / UPPER');
        // var newPassword = [];
        /* FOR LOOP LOGIC*/
        // return newPassword;
      }
      else if (special === true && numeric === true && lower === false && upper === true) {
        window.alert('SPECIAL / NUMERIC / UPPER');
        // var newPassword = [];
        /* FOR LOOP LOGIC*/
        // return newPassword;
      }

      else if (special === true && numeric === true && lower === true && upper === false) {
        window.alert('SPECIAL / NUMERIC / LOWER');
        // var newPassword = [];
        /* FOR LOOP LOGIC*/
        // return newPassword;
      }

      else if (special === false && numeric === true && lower === true && upper === false) {
        var numberLowerArr = numberCharacters.concat(lowerCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(numberLowerArr[Math.floor(Math.random() * numberLowerArr.length)]);
        }
      }

      else if (special === false && numeric === true && lower === false && upper === true) {
        var numberUpperArr = numberCharacters.concat(upperCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(numberUpperArr[Math.floor(Math.random() * numberUpperArr.length)]);
        }
      }

      else if (special === false && numeric === true && lower === true && upper === true) {
        window.alert('NUMERIC / LOWER / UPPER');
        // var newPassword = [];
        /* FOR LOOP LOGIC*/
        // return newPassword;
      }

      else if (special === false && numeric === false && lower === true && upper === true) {
        window.alert('LOWER / UPPER');
         var lowerUpperArr = lowerCharacters.concat(upperCharacters);
        for(var i = 0; i < numberOfCharacters; i++) {
          selectedCharacters.push(lowerUpperArr[Math.floor(Math.random() * lowerUpperArr.length)]);
        }
      }

      else {
        window.alert('You must confirm at least one character type.');
        return generatePassword();
      };

      var combinedCharacters = selectedCharacters.join('');
      return combinedCharacters;

    }

    
    /*  THIS WAS GIVEN TO US */
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    /*  THIS WAS GIVEN TO US */
  }

  else {
    window.alert('Password Length must be a Number between 8 and 128 characters.');
    return writePassword();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 
User clicks generate password


after last confirm password is displayed in textarea
*/