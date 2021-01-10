var date = document.querySelector("#dob");
var btnTranslate = document.querySelector("#check");
var outputDiv = document.querySelector("#output");
//document.getElementById("output").style.display = "none";

btnTranslate.addEventListener("click", leapYear)
function leapYear(){
  var dob = date.value
  alist = dob.split(/[/]/);
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

btnSubmit.addEventListener("click", isPrime);


function isPrime(){
  console.log(ipPrime.value)
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

