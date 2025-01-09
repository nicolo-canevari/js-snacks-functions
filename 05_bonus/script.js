/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greeting = (name) => {

    // Ottengo l'ora corrente
    const currentHour = new Date().getHours(); 

    let greetingMessage;

    if (currentHour < 13) {
        greetingMessage = 'Buongiorno';
    } else if (currentHour < 17) {
        greetingMessage = 'Buon pomeriggio';
    } else {
        greetingMessage = 'Buonasera';
    }

    return `${greetingMessage} ${name}.`;

};

// Invoca la funzione qui e stampa il risultato in console
console.log(greeting(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


// SNACK 4 (con arrow functions)
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione con arrow function
const countVowels = (str) => {
    const vowels = 'aeiou'; 
    let count = 0;
    let vowelList = [];
  
    // Ciclo attraverso ogni carattere della stringa
    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
            vowelList.push(str[i]);
        }

    }
  
    return { count, vowels: vowelList };
    
}

// Invoca la funzione e stampa il risultato in console
const result = countVowels(word);
console.log(`${word}: ${result.count} (${result.vowels.join(', ')})`);