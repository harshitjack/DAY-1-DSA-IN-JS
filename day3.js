
                 //day 3 

                 //Q1: Write a program to check whether a given year is a leap year or not.

// let year = Number(prompt("Enter year:"));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


                    //Q2: Write a program to find the largest of three numbers. 

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let num3 = Number(prompt("Enter third number:"));
// let largest;

// if (num1 >= num2 && num1 >= num3) {     
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }

// else {
//     largest = num3;
// }
// console.log("The largest number is: " + largest);

 

//Q2 shop discount program 

let amount = Number(prompt('enter the amount '))

if(amount>=0 && amount <=5000){
     console.log(amount+ 'no discount ')
} else if(amount>=5000 && amount<=7000){
    console.log( amount-(5*amount)/100)
}else if(amount>=7000 && amount<=9000) {
    console.log(amount - (10 *amount)/100)
}else if(amount>9000){
    console.log(amount -(20*amount)/100)
}else{
    console.log('invalid amount')
}

//   