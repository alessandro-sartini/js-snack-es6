/* 

!Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/


const biciDaCorsa = [

    { nome: "Specialized S-Works Tarmac", peso: 6.8 },
    { nome: "Cannondale SuperSix Evo", peso: 7.2 },
    { nome: "Trek Emonda SL", peso: 6.5 },
    { nome: "Bianchi Oltre XR4", peso: 7.8 },
    { nome: "Pinarello Dogma F12", peso: 6.9 },
    { nome: "Cervélo R5", peso: 6.6 },
    { nome: "Giant TCR Advanced SL", peso: 7.4 },
    { nome: "Scott Addict RC", peso: 6.7 },
    { nome: "Colnago V3RS", peso: 6.3 },
    { nome: "Wilier Triestina Zero SLR", peso: 7.0 }

];
    
// let biciLeggera = biciDaCorsa[0];

// for (let i = 0; i < biciDaCorsa.length; i++){

//     if (biciDaCorsa[i].peso < biciLeggera.peso) {

//         biciLeggera = biciDaCorsa[i];

//     }

// }

// console.log("La bici con il peso minore è: ", biciLeggera);


let biciLeggera = 0; 

for (let i = 0; i < biciDaCorsa.length; i++) { 
    if (biciDaCorsa[i].peso < biciDaCorsa[biciLeggera].peso) {
        biciLeggera = i; 
    }
}
console.log("La bici con il peso minore è: ", biciDaCorsa[biciLeggera]);
/* 

!Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/


const squadreCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Sampdoria", puntiFatti: 0, falliSubiti: 0 }
];
  
for (let i = 0; i < biciDaCorsa.length; i++) {
      
    let randomNum = Math.floor(Math.random()*70)+1
    let falliSubiti = Math.floor(Math.random()*40)+1
    squadreCalcio[i].puntiFatti=randomNum
    squadreCalcio[i].falliSubiti=falliSubiti

}

let squdreFalli=[]

for (let p in squadreCalcio){

    squdreFalli.push( squadreCalcio[p].nome, squadreCalcio[p].falliSubiti)
    console.log((` ${squadreCalcio[p].nome} ha subuito ${squadreCalcio[p].falliSubiti} falli`))
    // console.log(` ${squadreCalcio[p].nome} ha fatto ${squadreCalcio[p].puntiFatti } punti`)
    // console.log(` ${squadreCalcio[p].nome} ha subuito ${squadreCalcio[p].falliSubiti} falli`)

}

console.log(squdreFalli)

/* 
!Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).

*/


const paroleFantasiose = [
    "Nebbia d'oro",
    "Luna blu",
    "Drago verde",
    "Vento arcano",
    "Onda di fuoco",
    "Rosa d'ombra",
    "Cielo viola",
    "Specchio magico",
    "Fiamma eterna",
    "Eco stellare"
];


const reduceArray=[]

function selctIndex(startArray, idxStart, idxFinish) {
    

    for (idxStart = idxStart+1; idxStart < idxFinish; idxStart++) {
        console.log(idxStart)
       reduceArray.push(startArray[idxStart])     
          
    }
    return reduceArray
}

console.log(selctIndex(paroleFantasiose, 2,5))






