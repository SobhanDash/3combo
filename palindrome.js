var userInput =("Enter a number:");

// split -> reverse -> join

function checkpalin(input){
    var splitarr = input.split("");
    
    var reversearr = splitarr.reverse();
    
    var revstr = reversearr.join("");
    

    if (input===revstr){
        return "It is a palindrome"
    }
    else{
        return "It's not a palindrome"
    }
}

alert(checkpalin(userInput));