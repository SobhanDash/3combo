var date = document.querySelector("#dob");
var check = document.querySelector("#check");
var outputDiv = document.querySelector("#output");


function leapYear(){
  var dob = date.value
  alist = dob.split(/[/]/);
  // console.log(alist);
  year = alist[2];
  // console.log(year);
  var leapYearMessage="Your birth year is a leap year!";
  var notLeapYearMessage ="Your birth year is not a leap year!"

  if(year1 % 4 === 0){
    if(year1 % 100 === 0){
      if(year1 % 400 === 0){
        return leapYearMessage;
      }
      else{
        return notLeapYearMessage;
      }
    }
    else{
      return leapYearMessage;
    }
  }
  return notLeapYearMessage;
}

(leapYear(year))

check.addEventListener("click",leapYear)
