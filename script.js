// Assignment code here
let generatePassword = function () {
  // Variables associated with specific criteria
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWUXYZ" // Random uppercase letter
  let lowerCase = "abcdefghijklmnopqrstuvwxyz" // Random lowercase letter
  let number = "0123456789" // random number
  let symbol = "!#$%&*+-.:;<=>?@^_{|}~" // random special character
  let passArr = [];
  var myArr = "";
  window.alert("Select criteria for password");//OPENING ALERT
  //Criteria for Password
  // create an if statement that conditions the user to make a valid input. If not valid alert will pop up.
  var characterLengthPrompt = parseInt(window.prompt("Enter the length of characters you wish to have. Character length must be ATLEAST 8 and NO MORE than 128."));
  if (characterLengthPrompt === "" || characterLengthPrompt === null || characterLengthPrompt < 8 || characterLengthPrompt > 128) {
    window.alert("Please eneter a valid character length.");
    return ""
  }
  // if user confirms upperCase letters then they will be stored in passArr.
  // if user declines upperCase letters then an empty string will be returned
  var confirmUpper = window.confirm("Would you like to have UPPERCASE characters in your password?");
  if (confirmUpper) {
    window.alert("UPPERCASE letters have been selected in your password."); 
    passArr += upperCase;

    
  }
  else {
    window.alert("NO UPPERCASE CHARACTERS WILL BE IN YOUR PASSWORD.");
    confirmUpper = ""
  }
  //if user confirms then lowerCase will be passed into array
  //if user denies then empty string will be returned
  var confirmLower = window.confirm("Would you like to have lowercase characters in your password?");
  if (confirmLower) {
    window.alert("lowercase characters have been selected in your password.");
    passArr += lowerCase
    
  }
  else {
    window.alert("NO LOWERCASE CHARACTERS WILL BE IN YOUR PASSWORD.");
    confirmLower = ""
  }
  //if user confirms then numbers will be passed into array
  //if user denies then empty string will be returned
  var confirmNumbers = window.confirm("Would you like to have numbers in your password?");
  if (confirmNumbers) {
    window.alert("Numbers have been selected for your password");
    passArr += number
    
  }
  else {
    window.alert("NO NUMBERS WILL BE IN YOUR PASSWORD");
    confirmNumbers = ""
  }
  //if user confirms then special symbols will be passed into array
  //if user denies then empty string will be returned
  var confirmSpecial = window.confirm("Would you like to have special characters?");
  if (confirmSpecial) {
    window.alert("Special characters have been selected");
    passArr += symbol

  }
  else {
    window.alert("NO SPECIAL CHARACTERS WILL BE IN YOU PASSWORD");
    confirmSpecial = ""
  };

};


  return generatePassword()





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

