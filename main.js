function somma() {
    let punteggio = 0;
    let n = 3;
    for (let i = 0; i < n; i++){
        let tiro = Math.floor(Math.random() * (6 - 1) + 1); 
        punteggio += tiro;
    }
    return punteggio;
}

let giocatore1 = somma();
let giocatore2 = somma();


if (giocatore1 > giocatore2) {
    console.log('Vince il giocatore 1'); 
} else if (giocatore1 = giocatore2) {
    console.log('Pareggio');
} else {
    console.log('Vince il giocatore 2');
}

console.log(giocatore1);
console.log(giocatore2);