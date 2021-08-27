// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo lista cognomi
const listaCognomi = [ 'verdi', 'rossi', 'bianchi', 'neri', 'carducci', 'gialli' ];

// creo lista nomi
const listaNomi = [ 'giacomo', 'marco', 'samuele', 'nicola', 'federico', 'nando', 'piero' ];

// creo lista nomi completi generati
const competeNames = [];

// genero i tre nomi e cognomi e li stampo
while (competeNames.length < 3) {
    let generatedName = listaNomi[Math.floor(Math.random() * listaNomi.length)];
    let generatedSurname = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

    // if the complete name is not included add it to the list
    if (!competeNames.includes(`${generatedName} ${generatedSurname}`)) {
        competeNames.push(`${generatedName} ${generatedSurname}`);
    }
}

for (let i = 0; i < competeNames.length; i++) {
    console.log(competeNames[i]);
}