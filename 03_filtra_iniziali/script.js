/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByInitial(namesArray, letter) {
    return namesArray.filter(name => name[0].toLowerCase() === letter.toLowerCase());
}

// Invoca la funzione qui e stampa il risultato in console
const letter = "A";
console.log(filterByInitial(names, letter));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]