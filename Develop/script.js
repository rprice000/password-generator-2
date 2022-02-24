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

     var confirmSpecialCharacters = window.confirm('Click OK if you want to include Special Characters.');
     console.log(confirmSpecialCharacters);

     var confirmNumbericCharacters = window.confirm('Click OK if you want to include Numberic Characters.');
     console.log(confirmNumbericCharacters);

     var confirmLowerCaseCharacters = window.confirm('Click OK if you want to include Lower Case Characters.');
     console.log(confirmLowerCaseCharacters);

     var confirmUpperCaseCharacters = window.confirm('Click OK if you want to include Upper Case Characters.');
     console.log(confirmUpperCaseCharacters);
     
   }


  else {
     window.alert('Password Length must be a Number between 8 and 128 characters.');
     return writePassword();
   }

 





  

  
/*  THIS WAS GIVEN TO US */
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
/*  THIS WAS GIVEN TO US */

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 
User clicks generate password


after last confirm password is displayed in textarea
*/