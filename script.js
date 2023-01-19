// Assignment Code, define variables used
let lowerCase = ('');
let upperCase = ('');
let specChar = ('');
let numChar =  ('');
let charSet = ('');
const lowerCaseVal = ('abcdefghijklmnopqrstuvwxyz');
const upperCaseVal = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const specCharVal = ('!@#$%^&*()-_=+{}<>?/'); 
const numCharVal = ('0123456789');
let generateBtn = document.querySelector("#generate");

//create random password
function generatePassword() {
  charSet = ('');
  let passVal = prompt('Please enter how long your password will be: min-8 max 120');
  console.log(passVal);
  if (isNaN(passVal)) {
    alert("You haven't entered a number!");
    return generatePassword();
  };
    if (passVal < 8 || passVal > 120) {
      alert('Please choose between 8 and 120');
      return generatePassword();
    };
  

  
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
    
  if(lowerCase === true) {
    charSet += lowerCaseVal;
    console.log(charSet)
  }
  if(upperCase === true) {
    charSet += upperCaseVal;
      console.log(charSet);
  }
  if(specChar === true) {
      charSet += specCharVal;
      console.log(charSet);
  }
  if(numChar === true) {
      charSet += numCharVal;
      console.log(charSet);
      
    
   
  
  /*if(charSet = lowerCase && upperCase && numChar && specChar) {
    charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_[]{};:<>/?')
      if(charSet = lowerCase && upperCase && numChar) {
        charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
        if(charSet = lowerCase && upperCase){
          charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
          if(charSet = lowerCase){
            charSet = ('abcdefghijklmnopqrstuvwxyz')
          }
        }
      }else if(charSet = lowerCase && upperCase && specChar){
        charSet = ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_[]{};:<>/?')
      }else if(charSet = lowerCase && numChar && specChar) {
        charSet = ('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_[]{};:<>/?')
      }else if(charSet = lowerCase && numChar){
        charSet = ('abcdefghijklmnopqrstuvwxyz0123456789')
      }else if(charSet = lowerCase && specChar){
        charSet = ('abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_[]{};:<>/?')
      }
  }*/

  }
  console.log(charSet);

  //charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  retVal = "";
  for (var i = 0, n = charSet.length; i < passVal; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * n));
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
