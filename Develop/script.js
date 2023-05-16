// Assignment code here
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","@","#","$","%","^","&","*","?",">","<",":",";"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let userInput = prompt("How many characters would you like your password to contain?")
  if (userInput < 8 || userInput > 128) {
    alert("Invalid input, please choose between 8 and 128")

    return ""
  } 
  let confirmSpecial = confirm("Click OK to confirm including special characters.")
  let confirmNumbers = confirm("Click Ok to confirm including numerical characters.")
  let confirmLowercase = confirm("Click ok to confirm including lowercase characters.")
  let confirmUppercase = confirm("Click OK to confirm inlcuding uppercase characters.")

  

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
