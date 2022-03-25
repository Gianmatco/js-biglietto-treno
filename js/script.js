//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let numeroKilometri = prompt("quanti km devi percorrere ?")
console.log(numeroKilometri)


let etaUtente = prompt("quanti anni hai ? ")
console.log(etaUtente)

let prezzoAlKm = '0.21';
console.log(prezzoAlKm)

let bigliettoUtente  = numeroKilometri * prezzoAlKm ;
console.log(bigliettoUtente);


let scontoMinorenni = bigliettoUtente * '0,2';
console.log(scontoMinorenni)


let scontoOver = bigliettoUtente * '0,4';
console.log(scontoOver)




if(etaUtente <= '18'){
    prezzoBigliettoUtente = bigliettoUtente - scontoMinorenni;
} else if(etaUtente >= '65'){
    prezzoBigliettoUtente = bigliettoUtente - scontoOver;
} else {
    prezzoBigliettoUtente = bigliettoUtente ;

}






document.getElementById("prezzobigliettoutente").innerHTML = prezzoBigliettoUtente;



