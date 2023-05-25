
const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

const pcNumber = pcRandomNumber(1,5);

console.log(userChoice);

console.log(userNumber);

console.log(pcNumber)

function pcRandomNumber (minNumber, maxNumber){
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return randomNumber;
}

let sum = userNumber + pcNumber;

console.log(sum);

function isResultEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
    
}

if (isResultEven(sum) && userChoice.toLocaleLowerCase() == "pari" ){
    console.log ("hai vinto!");
} else {
    console.log ("hai perso");
}



