// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special ="@%+\/'!#$^?:.(){}[]~-_.";


// Write password to the #password input
function writePassword() {
  
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // button click needs to trigger an alert 
  var start = confirm("Let's create a password");

  if (start) {
      var pswLength =
     prompt("How long would you like your password (between 8 and 128");
       if(pswLength < 7 | pswLength > 128){
         confirm("try again must be between 8 and 128");
         pswLength;
       }  else {
          pwsLength= parseInt; 
          var lower  = confirm("would you like a lower case letter in your password?");
        
          var upper =confirm ("would you like an upper case letter in your password?")

          var num = confirm ("would you like a number in your password?")

          var special = confirm ("would you like a special character in your password?")
          }

  } else {
     alert("Come back later when you need a password, goodbye");
   }
  
  

 
  
}

// Add event listener to generate button
// generateBtn.addEventListener("click");

// MY CODE STARTS HERE


generateBtn.addEventListener("click", writePassword);




// button needs to start the process
  // ask if user wants a password
    //if yes cont.
    //if no end it 
 
  // ask user about length
    // Remember length, make into a number
  
  //ask user if lower case
    //remember choice
  
  //ask user if upper case
    //remember choice
  
  //ask user if number
    //remember choice
  
  //ask user if special character
    //remember choice
  
  //generate password that fits requests - random
    //post to page in box  
  

// }

// function testing () {alert("why does this not work???")};
// cycle through prompts   loop



// prompt (Would you like a specialized password)
      // yes- go on,   no-give very basic password

// prompt password length (between 8 and 128) alert ("how long would you like your password?")

// character types (special characters, upperCase, lower case, number)

// store input data



// randomize given length and using given types of chars

// produce password