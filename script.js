// Assignment Code
var generateBtn = document.querySelector("#generate");

//create variables with the first and second number indicating the range of vales of that type in the unicode chart
var lowCase = [97, 122];
var upCase = [65, 90];
var numCase = [48, 57];
var specCase = [33, 47];

// Write password to the #password input
function writePassword(){
//Ask the user how many characters they want in the password an validate the input        
    var passLength = prompt("How many characters do you want to use between 8 and 128?");  
    while (passLength < 8 || passLength > 122 || isNaN(passLength))  
    {  
      passLength = prompt("Incorrect value entered, please enter a number between 8 and 122!");  
    }

//Ask the user which character types to include and make sure that at least 1 type is selected
    var includeLow = confirm("Do you want to include lower case characters? Click OK for yes"); 
    var includeUp = confirm("Do you want to include upper case characters? Click OK for yes"); 
    var includeNum = confirm("Do you want to include numbers? Click OK for yes"); 
    var includeSpec = confirm("Do you want to include special characters? Click OK for yes"); 

    while (includeLow!=true&&includeUp!=true&&includeNum!=true&&includeSpec!=true){  
        alert("You must include at least 1 type of character"); 
        var includeLow = confirm("Do you want to include lower case characters? Click OK for yes"); 
        var includeUp = confirm("Do you want to include upper case characters? Click OK for yes"); 
        var includeNum = confirm("Do you want to include numbers? Click OK for yes"); 
        var includeSpec = confirm("Do you want to include special characters? Click OK for yes"); 
    }

//Make an empty array to push all values to
    var usrChoice = [];
//Make an array that holds the generated password
    var password = [];

//Push all values that user includes into usrCode array
    if(includeLow === true){
        for(let i = lowCase[0]; i <= lowCase[1]; i++){
          usrChoice.push(i);            
        }
    }        

    if(includeUp === true){
        for(let i = upCase[0]; i <= upCase[1]; i++){
            usrChoice.push(i);            
        }
    }  

    if(includeNum === true){
        for(let i = numCase[0]; i <= numCase[1]; i++){
            usrChoice.push(i);            
        }
    }  
       
    if(includeSpec === true){
        for(let i = specCase[0]; i <= specCase[1]; i++){
            usrChoice.push(i);            
        }
    }  
        
//Use the length given to pick the total number to include 
//Use String.CharCode to change value to character
    for(let i = 0; i < passLength; i++){
        password.push(String.fromCharCode(usrChoice[Math.floor(Math.random()*usrChoice.length)]));
    }
    //Join, remove "," and display password created
        var passwordText = document.querySelector("#password");
        passwordText.value = password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
