// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password Function

var generatePassword = function () {
  // window prompt for character length
  var characterLength = window.prompt("Select how long you'd like your password to be. Min - 8 Max - 128");
  // verify character length
  if (characterLength < 8 || characterLength > 128) {
    window.alert("You need to select a valid number.");
    return;
  } else if (characterLength === "" || characterLength === "null") {
    window.alert("You need to select a valid number.");
    return;
  }
  // window prompt for lowercase
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  // window prompt for uppercase
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  // window prompt for numbers
  var numbers = window.confirm("Would you like to use numbers?");
  // window prompt for special characters
  var special = window.confirm("Would you like to use special characters?");
  // verify that at least one of the above was selected
  if (lowerCase && upperCase && numbers && special === false) {
    window.alert("Please select one of the previous options to continue.")
    return;
  }
  // array for lowercase
  var addLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // array for uppercase
  var addUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // array for numbers
  var addNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // array for special characters
  var addSpecial = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
  // array for all
  var arrCharacters = []
  if (upperCase) {
    arrCharacters = arrCharacters.concat(addUpperCase);
  }
  if (lowerCase) {
    arrCharacters = arrCharacters.concat(addLowerCase);
  }
  if (numbers) {
    arrCharacters = arrCharacters.concat(addNumbers);
  }
  if (special) {
    arrCharacters = arrCharacters.concat(addSpecial);
  }

  console.log(addUpperCase[Math.floor(Math.random() * addUpperCase.length)]);
  console.log(arrCharacters);
  console.log(arrCharacters[Math.floor(Math.random() * arrCharacters.length)]);

  var getPassword = []
  for (i = 0; i < characterLength; i++) {
    console.log(arrCharacters[Math.floor(Math.random) * arrCharacters.length]);
  }
  return getPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
