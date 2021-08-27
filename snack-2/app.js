
// Inserisci un numero
let number = parseInt(prompt('inserisci un numero'));

// controllo se è un numero
while ( isNaN(number) ) {
    number = parseInt(prompt('attenzione!! inserisci un numero'));
}

// se è pari stampa il numero altrimenti stampo il numero successivo
if (number % 2 == 0) {
    console.log(number);
} else {
    console.log(number + 1);
}