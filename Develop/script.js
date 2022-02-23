// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfCharacters = window.prompt('How many characters would you like your password to contain?');

      numberOfCharacters = parseInt(numberOfCharacters);    
  
      if ( numberOfCharacters === null ) {
        window.alert('When you are ready to generate a password; please re-click the Generate Password Button below.');
        return;
      }
      // if ( numberOfCharacters == NaN ) {
      //   window.alert('Password Length must be provided as a number.');
      //   return writePassword();
      // }

      // if ( numberOfCharacters <= 7 ) {
      //   window.alert('Password Length must be at least 8 characters.');
      //   return writePassword();
      // }
      // if ( numberOfCharacters >= 129 ) {
      //   window.alert('Password Length must be less than 129 characters.');
      //   return writePassword();
      // }
      





      // if ( numberOfCharacters == null || typeof numberOfCharacters == 'string' || typeof numberOfCharacters == String || numberOfCharacters instanceof String ) {
      //   window.alert('Password Length must be provided as a number.');
      //   return writePassword();
      // }
      // if ( numberOfCharacters < 8 ) {
      //   window.alert('Password Length must be at least 8 characters.');
      //   return writePassword();
      // }
      // if ( numberOfCharacters > 128 ) {
      //   window.alert('Password Length must be less than 129 characters.');
      //   return writePassword();
      // }

  console.log(numberOfCharacters);

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