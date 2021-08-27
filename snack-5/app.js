// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// creo i due array di numeri
const primoArray = [];
const secondoArray = [];

// decido randomicamente quanti elementi devono contenere l'array
const numeroElementiPrimoArray = Math.floor(Math.random() * 20);
const numeroElementiSecondoArray = Math.floor(Math.random() * 20);

// li riempio di conseguenza di numeri random tra 1 e 100
for (let i = 0; i < numeroElementiPrimoArray; i++) {
    primoArray.push(Math.floor((Math.random() * 100) + 1));
}
for (let i = 0; i < numeroElementiSecondoArray; i++) {
    secondoArray.push(Math.floor((Math.random() * 100) + 1));
}

console.log(`prima di pareggiarli:`);
console.log(primoArray, secondoArray);


// aggiungo elementi al più corto finchè non hanno lo stesso numero di elementi
while ( secondoArray.length < primoArray.length ) {
    secondoArray.push(Math.floor((Math.random() * 100) + 1));
}
while ( secondoArray.length > primoArray.length ) {
    primoArray.push(Math.floor((Math.random() * 100) + 1));
}

console.log(`dopo averli pareggiati:`);
console.log(primoArray, secondoArray);