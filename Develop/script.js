// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");

  // Validating password length
  if (passwordLength === null || passwordLength === "" || isNaN(passwordLength) || passwordLength <8 || passwordLength > 128) {
    alert("Invalid input, please choose a number between 8 and 128")
    return;
  }

  let confirmSpecial = confirm("Click OK to confirm including special characters.")
    if (confirmSpecial == true){
      confirmSpecial = special
    }

    

  let confirmNumbers = confirm("Click Ok to confirm including numerical characters.")
    if (confirmNumbers == true){
      confirmNumbers = numbers
    }

  

  let confirmLowercase = confirm("Click ok to confirm including lowercase characters.")
  if (confirmLowercase == true){
    confirmLowercase = lowercase
  }

  

  let confirmUppercase = confirm("Click OK to confirm inlcuding uppercase characters.")
  if (confirmUppercase == true){
    confirmUppercase = uppercase
  }

  

  var passwordArray = [userInput, confirmSpecial, confirmNumbers, confirmLowercase, confirmUppercase];
  console.log(passwordArray)






  return "generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// 1. Prompt the user for password criteria
//    a. password length 8-128 chars
//    b. lowercase, uppercase, special characters
// 2. validate the input
// 3. generate password based on criteria
// 4. display password to the page
