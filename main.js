let messaggio = prompt ('Tira il dado 3 volte');

function somma(giocatore) {
    let punteggio = 0;
    let n = 3;
    for (let i = 1; i <= n; i++){
        punteggio = punteggio + Math.floor(Math.random() * (6 - 1) + 1); 
    }
    let messaggio = `Il punteggio ${punteggio} ${giocatore}`;
    return messaggio;
}

let giocatore1 = somma('è del giocatore 1');
let giocatore2 = somma('è del giocatore 2');
console.log(giocatore1);
console.log(giocatore2);

if (giocatore1 > giocatore2) {
    console.log('Vince il giocatore 1'); 
} else if (giocatore1 = giocatore2) {
    console.log('Pareggio');
} else {
    console.log('Vince il giocatore 2');
}