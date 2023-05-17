// Assignment code here
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","@","#","$","%","^","&","*","?",">","<",":",";"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let userInput = prompt("How many characters would you like your password to contain?")
  if (userInput < 8 || userInput > 128 || userInput == " ") {
    alert("Invalid input, please choose a number between 8 and 128")

    return;
  }

  let confirmSpecial = confirm("Click OK to confirm including special characters.")
    if (confirmSpecial == true){
      confirmSpecial = special
    }

    console.log(confirmSpecial)

  let confirmNumbers = confirm("Click Ok to confirm including numerical characters.")
    if (confirmNumbers == true){
      confirmNumbers = numbers
    }

  console.log(confirmNumbers)

  let confirmLowercase = confirm("Click ok to confirm including lowercase characters.")
  if (confirmLowercase == true){
    confirmLowercase = lowercase
  }

  console.log(confirmLowercase)

  let confirmUppercase = confirm("Click OK to confirm inlcuding uppercase characters.")
  if (confirmUppercase == true){
    confirmUppercase = uppercase
  }

  console.log(confirmUppercase)

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
