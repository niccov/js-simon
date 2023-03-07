/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
______________________________________________________________________________________________
-creare un button collagato all'event listener
-al click inserisce in pagina 5 numeri casuali e fa partire un timer di 10 secondi
  .creare 5 variabili che memorizzano ciascuno un numero dalla funzione random numbers
  .stamparli in pagina
  .dopo 10 secondi fai apparire una serie di 5 prompt dove deve inserire i numeri visti
    ->memorizzare i numeri inseriti nei 5 prompt
    ->confrontare le 5 variabili dei numeri casuali con le 5 variabili dei numeri inseriti nei prompt
    -SE i 5 numeri sono uguali
      .stampa in pagina "hai vinto";
      .stampa i numeri uguali e quelli diversi
    :ALTRIMENTI 
      .stampa in pagina "hai perso";
      .stampa i numeri diversi e quelli uguali 
*/
//memorizzo il pulsante per iniziare il gioco
let startButton = document.getElementById("play-button");

//dichiaro l'evento al click del button
startButton.addEventListener("click", function() {
    for(i = 0; i < 5; i++){
      const number = createRandomNumbers(99);
      console.log(number);
    }  
})


//___________________________________________________________________________
//FUNZIONI
//funzione per creare un numero random da 1 a un numero a scelta
function createRandomNumbers(max){
    // genero un numero random
 let random = Math.floor(Math.random() * (max) + 1);

 // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
 return random;

}
