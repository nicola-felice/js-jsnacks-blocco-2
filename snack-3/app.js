// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo lista cognomi
const listaCognomi = [ 'verdi', 'rossi', 'bianchi', 'neri', 'carducci', 'gialli' ];

// creo lista nomi
const listaNomi = [ 'giacomo', 'marco', 'samuele', 'nicola', 'federico', 'nando', 'piero' ];

// genero i tre nomi e cognomi e li stampo
for (let i = 0; i < 3; i++) {
    let generatedName = listaNomi[Math.floor(Math.random() * listaNomi.length)];
    let generatedSurname = listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

    console.log(generatedName, generatedSurname);
}