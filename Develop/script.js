// Assignment code here
// Setting up our variables for each password condition in an array and then use method split for some in order to avoid typing each individual letter in quotes
// logged each variable to confirm each case is present in the arrays
var specialChars = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u005C", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(specialChars);
var numChars = "0123456789".split("");
console.log(numChars);
var abcLower = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(abcLower);
var abcUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
console.log(abcUpper);

var userPW = "";
var userUpper;
var userLower;
var userNumb;
var userSpec;

// defining function to generate our password by using prompts, confirms, and alerts dependent on the user choice
// if user fails to follow criteria, will be taken back by the return to restart, if not, will continue to confirm
function generatePassword() {
  let userPW = prompt("How many characters do you want to include in your password? \nPlease choose a number between 8 characters and maximum of 128 characters.");
  
  // user fails to input number between 8 and 128 will be returned to start
  if (userPW < 8 || userPW > 128) {
    alert("Please input minimum of 8 and a maximum of 128.");
    return generatePassword();
  }
  
  // setting each variable with confirm windows to set parameters for determining our PW selection
  var userUpper = confirm("Do you want to include any uppercase letters?");
  var userLower = confirm("Do you want to include any lowercase letters?");
  var userNumb = confirm("Do you want to include any numbers?");
  var userSpec = confirm("Do you want to include any special characters?");

// sets alert if user fails to make at least one selection and will return to start of function if so
if (!userLower && !userUpper && !userNumb && !userSpec) {
  alert("Please select at least one of the selections.")
  return generatePassword();
}

// setting up an empty array to add all our earlier variables into the array if confirmed above
// using concat to add the variables into the new 'newpassword' array
var newpassword = []

if (userUpper) {
  newpassword = newpassword.concat(abcUpper)
}

if (userLower) {
  newpassword = newpassword.concat(abcLower)
}

if (userNumb) {
  newpassword = newpassword.concat(numChars)
}

if (userSpec) {
  newpassword = newpassword.concat(specialChars)
}

// this logs our array selection based on the confirms and logs newpw into an array to pull from when running random loop
console.log(newpassword);

let newRandom = ""

// loop our randomPW generator to the length of the array set choice by user and will add to blank string, but will not be less than user input
// math floor will round our random math which will pull random decimals from 0 to 1 multipy by our newpw length to choose in our array
for (var i = 0; i < userPW; i++) {
  newRandom = newRandom + newpassword[Math.floor(Math.random() * newpassword.length)];
}

// prints our new random generated password
return newRandom;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
