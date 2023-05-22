const userWord = prompt("Inserisci una parola")

function palindromeFinder (string) {
    const length = string.length
       for (let i = 0; i < length / 2; i++) {
        
        if (string[i] !== string[length - 1 - i]) {
            return "Non è un palindromo"
        
    } else {return "è un palindromo"}
} 
}

const value = palindromeFinder(userWord)
console.log(value)