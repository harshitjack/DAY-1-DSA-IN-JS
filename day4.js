                //day-4 

                //Q1 accept an integer and print hello world n times 


                let n = Number(prompt('enter the number '))

                for(let i= 1 ;i<=n ;i++){
                    console.log('hello world ')
                }

                //Q2 print an time natural number 

                let n = Number(prompt('enter the number'))

                for(let i=1; i<=n; i++){
                     console.log(i)
                }

                it reverse

                let n = Number(prompt('enter the number '))

                for(let i= n ; i>=1;i--){
                    console.log(i)
                }
 //Q3 table of n number 

 let n= Number(prompt('enter  the number'))

 for(let i=1;i<=10;i++){
    console.log(n*i)
 }


//Q4  take a input and find even and odd sum sprataly 

let n = Number(prompt('enter the number '))
let evenSum= 0 ,oddSum = 0 

for(let i = 1 ; i<=n; i++){
    if(i%2===0){ even=evenSum+i;
    }
    else{
        oddSum=oddSum+i
    }
}
console.log('evenSum'+evenSum)
console.log('oddSum'+ oddSum)


//Q5 print the all factor of user number

let n = Number(prompt('enter the number'))

for(let i = 1 ; i<=n; i++){
    if(n%i==0) {
        console.log(i)
    }
}


//Q6 check a number it prime or not 

let n = Number(prompt('enter the number '))

for(let i =2 ; i<n ;i++){
    if(n%i==0){
        console.log('it is not a prime number ')
    }
    else{
        console.log( 'it is a prime number ')
    }
}



//Q8 threesome the number 
