// Assignment Code, define variables used
let lowerCase = ('');
let upperCase = ('');
let specChar = ('');
let numChar =  ('');
let charSet = ('');
const lowerCaseVal = ['abcdefghijklmnopqrstuvwxyz'];
const upperCaseVal = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const specCharVal = ['!@#$%^&*()-_=+{}<>?/']; 
const numCharVal = ['0123456789'];
let generateBtn = document.querySelector("#generate");

//create random password
function generatePassword() {
  let passVal = prompt('Please enter how long your password will be: min-8 max 120');
  console.log(passVal);
  //check what the user wants to use
  let lowerCase = confirm('Would you like to incorporate lower case letters?');
    console.log(lowerCase);
  let upperCase = confirm('Would you like to incorporate upper case letters?');
    console.log(upperCase);
  let specChar = confirm('Would you like to use special characters?');
    console.log(specChar);
  let numChar = confirm('Would you like to use numbers?');
    console.log(numChar);
  
    //create a variable based on results for charmap
    //splice values from boolean
  let charSet(lowerCase && upperCase && numChar && specChar)
    charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_[]{};:<>/?')
  }charSet.every(lowerCase && upperCase && numChar) 
    charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
   charSet.every(lowerCase && upperCase) 
    charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
   charSet.every(lowerCase) 
    charSet = ('abcdefghijklmnopqrstuvwxyz')
   charSet.every(lowerCase && upperCase && specChar) 
    charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_[]{};:<>/?')
   charSet.every(lowerCase && numChar && specChar) 
    charSet = ('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_[]{};:<>/?')
   charSet.every(lowerCase && numChar) 
    charSet = ('abcdefghijklmnopqrstuvwxyz0123456789')
   charSet.every(lowerCase && specChar) 
    charSet = ('abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_[]{};:<>/?');
  

  console.log(charSet);

  charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  retVal = "";
  for (var i = 0, n = charset.length; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
