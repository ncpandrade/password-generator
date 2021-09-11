// Assignment code here

/* DEFINE ARRAYS*/
//special character array
var specialCharacters = ['!','@','#','$','%','^','&','*','?','+'];
//lowercase letter array
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//uppercase letter array
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//numeric array
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
// array for all selected options

let charCodes = [];


/*FUNCTION TO GENERATE PASSWORD*/
function generatePassword (passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSymbol){

  //ask user desired password length
  passwordLength=window.prompt("How many characters do you want this password to have. Chose between 8 and 128.");

  //validate user input
  while(passwordLength <8 || passwordLength > 128){
    passwordLength=window.prompt("Invalid choice. Please chose between 8 and 128 characters.");
  }

  //ask user if special characters should be included
  includeSymbol=window.confirm("Do you want your password to include special characters?");
 
  //ask user if password should include lowercase characters
  includeLowercase=window.confirm("Do you want your password to include lowercase characters?");
  
  //ask user if uppercase characters should be included
  includeUppercase=window.confirm("Do you want your password to include uppercase characters?");
 
  //ask user if numeric characters should be included
  includeNumeric=window.confirm("Do you want your password to include numeric characters?");
 
  //VALIDATE IF USER SELECTED AT LEAST ONE CHARACTER TYPE OTHERWISE LOOP THROUGH PROMPTS AGAIN
  while(!includeLowercase && !includeUppercase && !includeNumeric && !includeSymbol){
   //ask user if special characters should be included
   includeSymbol=window.confirm("Do you want your password to include special characters?");
 
   //ask user if password should include lowercase characters
   includeLowercase=window.confirm("Do you want your password to include lowercase characters?");
   
   //ask user if uppercase characters should be included
   includeUppercase=window.confirm("Do you want your password to include uppercase characters?");
  
   //ask user if numeric characters should be included
   includeNumeric=window.confirm("Do you want your password to include numeric characters?");  
  }
  //concatinate all by user selected arrays to make one 
  if(includeLowercase){
    charCodes = charCodes.concat(lowerCharacters);
  }
  if(includeUppercase){
    charCodes = charCodes.concat(upperCharacters);
  }
  if(includeNumeric){
    charCodes = charCodes.concat(numericCharacters);
  }
  if(includeSymbol){
    charCodes = charCodes.concat(specialCharacters);
  }
console.log(charCodes);


//create array with password character selection using Math.random
//empty array that will hold random characters
const passwordCharacters = [];

//for loop for password length
for( let i = 0; i < passwordLength; i++){
  var randomChar = charCodes[Math.floor(Math.random() * charCodes.length)];
  console.log(randomChar);
  passwordCharacters.push(randomChar);
}
  console.log(passwordCharacters);
  return passwordCharacters;
};

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
