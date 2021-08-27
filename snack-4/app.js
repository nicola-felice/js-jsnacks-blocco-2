// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// creo lista numeri interi
const listaNumeri = [24, 28, 10, 11, 20, 38, 25, 3, 1, 7, 29, 62];

// lista di quelli in posizione dispari
const numeriIndiceDispari = [];

// sommo quelli in posizione dispari
let somma = 0;

for (let i = 0; i < listaNumeri.length; i++) {

    if (i % 2 !== 0) {
        somma += listaNumeri[i];
        numeriIndiceDispari.push(listaNumeri[i]);
    }
}

console.log(`I numeri di indice dispari da sommare sono: ${numeriIndiceDispari}`)
console.log(`La loro somma è: ${somma}`);