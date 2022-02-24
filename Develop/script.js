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
     window.alert('You got me')
   }
  else {
     window.alert('Password Length must be a Number between 8 and 128 characters.');
     return writePassword();
   }

 





  

  // if ( typeof numberOfCharacters == 'string' || numberOfCharacters instanceof String || numberOfCharacters == null  )
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

confirm that password should include special characters
  - if user selects okay then include special characters
  - else do not include special characters
confirm that password should include numeric characters
  - if user selects okay then include numeric characters
  - else do not include numeric characters
confirm that password should include lowercase characters
  - if user selects okay then include lowercase characters
  - else do not include lowercase characters
confirm that password should include uppercase characters
  - if user selects okay then include uppercase characters
  - else do not include uppercase characters
after last confirm password is displayed in textarea
*/