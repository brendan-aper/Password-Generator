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


// Confirm methods
  var confirmSpecial = confirm("Click OK to confirm including special characters.")
  var confirmNumbers = confirm("Click Ok to confirm including numerical characters.")
  var confirmLowercase = confirm("Click ok to confirm including lowercase characters.")
  var confirmUppercase = confirm("Click OK to confirm inlcuding uppercase characters.")


// Defined character sets
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCHARS = "0123456789";
  var specialChars = "!@#$%^&*()";

  var Chars = "";

  // Validating confirm methods
  if (confirmSpecial) {
    Chars += specialChars;
  }

  if (confirmNumbers) {
    Chars += numberCHARS;
  }

  if (confirmLowercase) {
    Chars += lowercaseChars;
  }

  if (confirmUppercase) {
    Chars += uppercaseChars;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * Chars.length);
    password += Chars[randomIndex];
  }
  
  return password;
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
