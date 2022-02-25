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
    // var newPassword = [];
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

      }

      else if (special === true && numeric === false && lower === false && upper === false) {
        window.alert('SPECIAL');
        for(var i = 0; i < numberOfCharacters; i++) {
          var randomAnswer = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
          console.log(randomAnswer);
        }
      }

      else if (special === false && numeric === true && lower === false && upper === false) {
        window.alert('NUMERIC');

        var newPassword = [];
        for(var i = 0; i < numberOfCharacters; i++) {
          // var newPassword = [];
          newPassword.push(numberCharacters[Math.floor(Math.random() * numberCharacters.length)]);
          console.log(newPassword);
          // return newPassword;





          // newPassword = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
          // var randomAnswer = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
          // console.log(newPassword);
          // return newPassword;
          // console.log(randomAnswer);
        }
        return newPassword;
      }

      else if (special === false && numeric === false && lower === true && upper === false) {
        window.alert('LOWER');
        for(var i = 0; i < numberOfCharacters; i++) {
          var randomAnswer = lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];
          console.log(randomAnswer);
        }
      }

      else if (special === false && numeric === false && lower === false && upper === true) {
        window.alert('UPPER');
        for(var i = 0; i < numberOfCharacters; i++) {
          var randomAnswer = upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
          console.log(randomAnswer);
        }
      }

      else if (special === true && numeric === true && lower === false && upper === false) {
        window.alert('SPECIAL / NUMERIC');

      }
      else if (special === true && numeric === false && lower === true && upper === false) {
        window.alert('SPECIAL / LOWER');

      }

      else if (special === true && numeric === false && lower === false && upper === true) {
        window.alert('SPECIAL / UPPER');

      }

      else if (special === true && numeric === false && lower === true && upper === true) {
        window.alert('SPECIAL / LOWER / UPPER');

      }
      else if (special === true && numeric === true && lower === false && upper === true) {
        window.alert('SPECIAL / NUMERIC / UPPER');

      }

      else if (special === true && numeric === true && lower === true && upper === false) {
        window.alert('SPECIAL / NUMERIC / LOWER');

      }

      else if (special === false && numeric === true && lower === true && upper === false) {
        window.alert('NUMERIC / LOWER');

      }

      else if (special === false && numeric === true && lower === false && upper === true) {
        window.alert('NUMERIC / UPPER');

      }
      else if (special === false && numeric === true && lower === true && upper === true) {
        window.alert('NUMERIC / LOWER / UPPER');

      }

      else if (special === false && numeric === false && lower === true && upper === true) {
        window.alert('LOWER / UPPER');
        
      }

      else {
        window.alert('You must confirm at least one character type.');
        return generatePassword();
      };

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