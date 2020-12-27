var dob = prompt("Enter your DOB in dd/mm/yyyy format: ");
alist = dob.split(/[/]/);
// console.log(alist);
year = alist[2];
// console.log(year);
var leapYearMessage="Your birth year is a leap year!";
var notLeapYearMessage ="Your birth year is not a leap year!"

function leapYear(year1){
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

alert(leapYear(year))

// this is a test for PR