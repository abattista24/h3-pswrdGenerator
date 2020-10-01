// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  //need to be written as a string
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar =[  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];



// Write password to the #password input
function writePassword() {
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // var password = picks(); 
  // passwordText.value = password;

  // button click needs to trigger an alert 
  // function options () { 
    var start = confirm("Let's create a password");

  if (start) {
      var pswLength =
     prompt("How long would you like your password (between 8 and 128"); pwsLength= parseInt; 
      if(pswLength < 7 || pswLength > 129){
        confirm("try again must be between 8 and 128");

        // if time work on getting this to return to start of loop
       return writePassword ();

      } else {
        
        var lower  = confirm("would you like a lower case letter in your password?");
        
        var upper =confirm ("would you like an upper case letter in your password?")

        var num = confirm ("would you like a number in your password?")

        var special = confirm ("would you like a special character in your password?")
       }

      function picks () {
        var result =[]
        var finalePassword =[]
        // tried to combine if statements but seem to work better when separated out, find out how to combine if statements.
        if (lower) {
          finalePassword += lowerCase
        console.log (lower)}


        if (upper){
          finalePassword += upperCase }
        
        if (num) {
          finalePassword += number }
          
        if (special){
          finalePassword += specialChar}
      
        for (var i = 0; i < pswLength; i++) {
          var genPsw= Math.floor(Math.random() * finalePassword.length);
          var randomEl = finalePassword [genPsw];
          result.push (randomEl);
           console.log (randomEl);
        //  passwordText.textContent += randomEl;  
        } 
         return result.join ("");
      }
      var passwordText = document.querySelector("#password");
      var password = picks(); 
      passwordText.value = password;
         }
  else {
     alert("Come back later when you need a password, goodbye");
   }
}
  
  

// Add event listener to generate button
// generateBtn.addEventListener("click");

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