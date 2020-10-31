// Assignment code here
let generatePassword = function () {
  // Variables associated with specific criteria
  //site for all listed criteria https://net-comber.com/charset.html
  let upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
  let lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random lowercase letter
  let number = String.fromCharCode(Math.floor(Math.random() * 10) + 48); // random number
  let symbol = String.fromCharCode(Math.floor(Math.random() * 15) + 33); // random special character
  window.alert("Select criteria for password");//OPENING ALERT
  //Criteria for Password
  // create an if statement that conditions the user to make a valid input. If not valid alert will pop up.
  var characterLenghtPrompt = window.prompt("Enter the length of characters you wish to have. Character length must be ATLEAST 8 and NO MORE than 128.");
  if (characterLenghtPrompt === "" || characterLenghtPrompt === null || characterLenghtPrompt < 8 || characterLenghtPrompt > 128) {
    window.alert("Please eneter a valid character length.");
    return generatePassword();
    // if characterLenght is not true then continue through function
  } 
  // create a for loop that spits out the character that user enters


  window.confirm("Would you like to have UPPERCASE characters in your password?");
  window.confirm("Would you like to have lowercase characters in your password?");
  window.confirm("Would you like to have numbers in your password?");
  window.confirm("Would you like to have special characters?");

};
generatePassword()
console.log(String.fromCharCode(Math.floor(Math.random() * 15) + 33));



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

