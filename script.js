// Assignment code here
var criteriaInput = function(){
  var passLength = "";

  while (passLength ==="" || passLength === null || passLength < 8 || passLength > 128 || isNaN(passLength) ){
    passLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
  }

  window.alert("You may include lowercase, uppercase, numeric, and/or special characters. Please select at least one.")

  passLowerCase = "";

  while (passLowerCase === "" || passLowerCase === null){
    passLowerCase = confirm("Would you like to include lowercase?");
  }

  passUpperCase = "";

  while (passUpperCase === "" || passUpperCase === null) {
    passUpperCase = confirm("Would you like to include uppercase?");
  }

  passNumeric = "";

  while (passNumeric === "" || passNumeric === null) {
    passNumeric = confirm("Would you like to include numeric values?");
  }

  passSpecial = "";

  while (passSpecial === "" || passSpecial === null) {
    passSpecial = confirm("Would you like to include special values?");
  }

  if(passSpecial == false & passLowerCase == false & passUpperCase == false & passNumeric == false){
    alert("Please select at least one character type to use.")
    criteriaInput();
  }

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
