// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfCharacters = window.prompt('How many characters would you like your password to contain?');

  if (numberOfCharacters === null) {
    window.alert('When you are ready to create a new password, please re-click the generate password button below.');
    return;
  };

  numberOfCharacters = parseInt(numberOfCharacters); // turns all inputs into  a number
  
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128 ) {

    function generatePassword() {
      var special = window.confirm('Click OK if you want to include Special Characters.');
      console.log(special);

      var numeric = window.confirm('Click OK if you want to include Numberic Characters.');
      console.log(numeric);

      var lower = window.confirm('Click OK if you want to include Lower Case Characters.');
      console.log(lower);

      var upper = window.confirm('Click OK if you want to include Upper Case Characters.');
      console.log(upper);
     
    }  

      if ( special === true && numeric === true && lower === true && upper === true ) {
        window.alert('ALL TRUE');
      }
      else if (special === true && numeric === false && lower === false && upper === false) {
        window.alert('SPECIAL');
      }
      else if (special === false && numeric === true && lower === false && upper === false) {
        window.alert('NUMERIC');
      }
      else if (special === false && numeric === false && lower === true && upper === false) {
        window.alert('LOWER');
      }
      else if (special === false && numeric === false && lower === false && upper === true) {
        window.alert('UPPER');
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
      };
  
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