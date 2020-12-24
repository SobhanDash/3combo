var dob = prompt("Enter your dob in dd/mm format: ");
alist = dob.split(/[/]/);

// console.log(alist);
dd = alist[0];
mm = alist[1];
// console.log(dd);
// console.log(mm);

var ddMssg = "Your Date is a prime no";
var ddnMssg = "Your Date is not a prime no";


function isPrime(num){
    if(num===1){
        return ddnMssg;
    }
    else if(num===2){
        return ddMssg;
    }
    else{
        for(var x = 2; x<num;x++){
            if(num%x===0){
                return ddnMssg
            }
        }
        return ddMssg;
    }
}

alert(isPrime(dd));