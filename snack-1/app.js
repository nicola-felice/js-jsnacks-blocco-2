// Il software deve chiedere per 5 volte all’utente di inserire un numero.
let somma = 0;
let number;
// for (let i = 0; i < 5; i++) {

//     do {
//         number = parseInt(prompt('inserisci un numero'));
//     } while ( isNaN(number) );

//     somma += number;
// }
// // Il programma stampa la somma di tutti i numeri inseriti.
// console.log(`la somma dei numeri inseriti è: ${somma}`);


// versione con while
let e = 0;
while (e < 5) {

    do {
        number = parseInt(prompt('inserisci un numero'));
    } while ( isNaN(number) );
    
    somma += number;

    e++;
}

console.log(`la somma dei numeri inseriti è: ${somma}`);