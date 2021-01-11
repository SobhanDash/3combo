var date = document.querySelector("#dob");
var btnTranslate = document.querySelector("#check");
var outputDiv = document.querySelector("#output");
//document.getElementById("output").style.display = "none";

btnTranslate.addEventListener("click", leapYear)
function leapYear(){
  var dob = date.value
  alist = dob.split(/[-,/]/);
  year = alist[2];
  var leapYearMessage="Your birth year is a leap year!";
  var notLeapYearMessage ="Your birth year is not a leap year!";

  if(year==undefined){
    document.getElementById("output").style.display = "block";
    outputDiv.innerText = "Enter the year!"
  }
  else if((year%4==0) && (year%100!=0) || (year%400==0)){
    document.getElementById("output").style.display = "block";
    outputDiv.innerText = leapYearMessage;
  }
  else{
    document.getElementById("output").style.display = "block";
    outputDiv.innerText = notLeapYearMessage;
  }
 }


var ipPrime  = document.querySelector("#prime");
var btnSubmit = document.querySelector("#submit");
var outDiv = document.querySelector("#output1");
//document.getElementById("output1").style.display = "none";

btnSubmit.addEventListener("click", isPrime);

function isPrime(){
  var num = parseInt(ipPrime.value);
  var primeMssg = num + " is a Prime! :)"
  var notPrimeMssg = num + " is not a Prime :("
  let result = true

    if(num==1){
        result = false;
    }
    else{
        for(var i=2; i<num; i++){
            if(num%i==0){
                result = false;
                break;
            }
        }
    }
  
  if (result==true){
    document.getElementById("output1").style.display = "block";
    outDiv.innerText = primeMssg;
  }
  else{
    document.getElementById("output1").style.display = "block";
    outDiv.innerText = notPrimeMssg;
  }
}


var ipPallin = document.querySelector("#pallin");
var check1 = document.querySelector("#check1");
var opDiv = document.querySelector("#op");
//document.getElementById("op").style.display = "none";

check1.addEventListener("click",checkpallin);

function checkpallin(){
  var isPallin = "It is a palindrome";
  var notPallin = "It's not a palindrome";
  var ipVal = ipPallin.value
  var astr = (ipVal).split("").reverse().join("");

  if (ipVal===astr){
    document.getElementById("op").style.display = "block";
    opDiv.innerText = isPallin;
  }
  else{
    document.getElementById("op").style.display = "block";
    opDiv.innerText = notPallin; 
  }
}
