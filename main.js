




// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi





$(document).ready(function(){

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printNumRandom(){

    while (arrayRandom.length < 5){
        var numRandom = getRndInteger(1, 100);

        if (!arrayRandom.includes(numRandom)){ // se array random non include il numero random
            arrayRandom.push(numRandom); //allora pusha
        }
    }
    document.getElementById("numeriRandom").innerHTML = arrayRandom; // stampo in pagina html arrayRandom
     // visualizzo i 5 numeri random
}

function visualFor30s (){
    setTimeout(function(){
        var objToHide = document.getElementById("numeriRandom"); // memorizzo nella var il contenuto da rimuovere
        objToHide.remove();  // lo rimuovo dopo 30s
    },32000);// Dopo 30 secondi, vengono rimossi i numeri dalla pagina
}

function countdownOnScreen () {
    var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft < 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Tempo Scaduto";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " secondi";
  }
  timeleft -= 1;
}, 1000);
} // countdown on screen

function askNumberAndVerifyPoints (){
    setTimeout(function(){

        var arrayNumIndovinati = [];
        var punteggio = 0;

        while (arrayUtente.length < 5){
            var numUtente = parseInt(prompt('inserisci il numero'));  // chiedo numeri all' utente finche' non ho 5 numeri diversi

            if (!arrayUtente.includes(numUtente)){  // pusho solo se arrayUtente non include il numUtente
                arrayUtente.push(numUtente);

                if (arrayRandom.includes(numUtente)){
                    arrayNumIndovinati.push(numUtente);  // pusho in arrayNumIndovinati solo se il numUtente e' presente nell' array dei numeri random (qst significa che l' utente ha indovinato un numero)
                    punteggio++; // aumento il punteggio di 1 ogni volta che il numUtente e' presente nell' array dei numeri random (qst significa che l' utente ha indovinato un numero)
                }
            }
            else {
                alert('hai già inserito qst numero'); // se il numero e' stato gia inserito allora stampo alert
            }
        }
        console.log('i tuoi numeri sono: ' + arrayUtente);
        console.log('I numeri da indovinare e ricordare erano: ' + arrayRandom);
        console.log('hai indovinato ' + punteggio + ' numero/i');
        console.log('i numero/i indovinati sono: ' + arrayNumIndovinati);
    },33000);
}



var arrayRandom = [];
var arrayUtente = [];


printNumRandom(); // stampo in pagina i num random
countdownOnScreen (); // Da lì parte un timer di 30 secondi.
visualFor30s(); // dopo 30 secondi i num random spariscono
askNumberAndVerifyPoints (); // e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta. // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati indovinati



});
