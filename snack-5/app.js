// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// funzione per generare un numero random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// creo i due array di numeri
const primoArray = [];
const secondoArray = [];

// decido randomicamente quanti elementi devono contenere l'array
const numeroElementiPrimoArray = getRandomNumber(0, 25);
const numeroElementiSecondoArray = getRandomNumber(0, 25);

// li riempio di conseguenza di numeri random tra 1 e 100
for (let i = 0; i < numeroElementiPrimoArray; i++) {
    primoArray.push(getRandomNumber(1, 100));
}
for (let i = 0; i < numeroElementiSecondoArray; i++) {
    secondoArray.push(getRandomNumber(1, 100));
}

console.log(`prima di pareggiarli:`);
console.log(primoArray, secondoArray);


// aggiungo elementi al più corto finchè non hanno lo stesso numero di elementi
while ( secondoArray.length < primoArray.length ) {
    secondoArray.push(getRandomNumber(1, 100));
}
while ( secondoArray.length > primoArray.length ) {
    primoArray.push(getRandomNumber(1, 100));
}

console.log(`dopo averli pareggiati:`);
console.log(primoArray, secondoArray);