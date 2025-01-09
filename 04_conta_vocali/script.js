/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {

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


// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(`javascript: ${result.count} (${result.vowels.join(', ')})`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)