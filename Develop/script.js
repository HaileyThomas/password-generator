// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password Function
var generatePassword = function () {

  // character length variable and prompt
  var characterLength = window.prompt("Select how long you'd like your password to be. Min - 8 Max - 128");
  // verify character length
  while (characterLength < 8 || characterLength > 128) {
    characterLength = prompt("Enter a valid number. Min - 8 Max - 128");
  }
  console.log(characterLength);
  // window prompt for lowercase
  var lowerCase = window.confirm("Would you like to use lowercase letters?");
  // window prompt for uppercase
  var upperCase = window.confirm("Would you like to use uppercase letters?");
  // window prompt for numbers
  var numbers = window.confirm("Would you like to use numbers?");
  // window prompt for special characters
  var special = window.confirm("Would you like to use special characters?");
  // verify that at least one of the above was selected
  while (lowerCase === false && upperCase === false && numbers === false && special === false) {
    window.alert("Please select at least one of the previous options");
    break;
  }

  // array for lowercase
  var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // array for uppercase
  var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // array for numbers
  var arrNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // array for special characters
  var arrSpecial = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
  // array for all
  var arrCharacters = []
  if (upperCase) {
    arrCharacters = arrCharacters.concat(arrUpperCase);
  }
  if (lowerCase) {
    arrCharacters = arrCharacters.concat(arrLowerCase);
  }
  if (numbers) {
    arrCharacters = arrCharacters.concat(arrNumbers);
  }
  if (special) {
    arrCharacters = arrCharacters.concat(arrSpecial);
  }

  console.log(arrUpperCase[Math.floor(Math.random() * arrUpperCase.length)]);
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
