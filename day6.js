let userInput

do{
    conlose.log('hello')
    userInput= prompt('app continue krna chahte ho ya nahi')
}while(userInput==='yes')


//Q Guess the number 



let com =  Math.floor(Math.random()*100)+1 
let userInput

do{
    userInput = Number(prompt('enter the number b/w 1to100'))
    if(isNaN(userInput) || userInput<0 || userInput>100){
        console.log('sahi se number dalo be ')
        continue
    }
    if(userInput>com)console.log('number is to high')
        else if (userInput<com)console.log('too small number ')
    else console.log('congrats you gussed it right🎉🍾👏'+com)
}while(userInput!==com)

