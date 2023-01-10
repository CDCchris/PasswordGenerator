// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordChoice = []


// Function to prompt user for password options
//prompt each and validate, store data

function getPasswordOptions() {
  var passwordLength = prompt('How many characters would you like? (Between 10-64)')
   if (passwordLength  < 10 || passwordLength  > 64) {
    alert('Please pick a number between 10-64.')
    getPasswordOptions()
} else {
  var lower = confirm('Would you like to use lower case characters?')
  var upper = confirm('Would you like to use upper case characters?')
  var special = confirm('Would you like to use special characters?')
  var numbers = confirm('Would you like to use numbers?')
  if (lower === true) {
    passwordChoice.push(...lowerCasedCharacters)
  }
  if (upper === true) {
    passwordChoice.push(...upperCasedCharacters)
  }
  if (special === true) {
    passwordChoice.push(...specialCharacters)
  }
  if (numbers === true) {
    passwordChoice.push(...numericCharacters)
  }
  console.log(passwordChoice)

  var collectedPasswordChoice = []

  for ( var i = 0; i < passwordLength; i++) {
    collectedPasswordChoice.push(passwordChoice[(Math.floor(Math.random() * passwordChoice.length))])
  }
  console.log(collectedPasswordChoice)
  return collectedPasswordChoice.join('')
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);