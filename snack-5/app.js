// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


// creo i due array di numeri
const primoArray = [ 3, 6, 2, 4, 8, 4, 2, 8, 3, 6, 2, 7, 2, 7 ];
const secondoArray = [ 3, 2, 6 ];

// aggiungo elementi al più corto finchè non hanno lo stesso numero di elementi
while ( secondoArray.length < primoArray.length ) {

    secondoArray.push(Math.floor((Math.random() * 100) + 1));
}

while ( secondoArray.length > primoArray.length ) {

    primoArray.push(Math.floor((Math.random() * 100) + 1));
}

console.log(primoArray.length, secondoArray.length);