/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
______________________________________________________________________________________________
-creare un button collagato all'event listener
-al click inserisce in pagina 5 numeri casuali e fa partire un timer di 10 secondi
  .creare un array con 5 numeri random
  .stamparli in pagina
  .dopo 10 secondi fai apparire una serie di 5 prompt dove deve inserire i numeri visti
    ->memorizzare i numeri inseriti nei 5 prompt in array
    ->confrontare i 2 array 
    -SE i 5 numeri sono uguali
      .stampa in pagina "hai vinto";
      .stampa i numeri uguali e quelli diversi
    :ALTRIMENTI 
      .stampa in pagina "hai perso";
      .stampa i numeri diversi e quelli uguali 
*/
//memorizzo il pulsante per iniziare il gioco
let startButtonElement = document.getElementById("play-button");

let numbersElement = document.getElementById("numeri-casuali");

//dichiaro l'evento al click del button
startButtonElement.addEventListener("click", function() {
    //array di numeri casuali 
    const arrayNumbers = repeatRandomNumber(99);
    //array stampato in pagina
    numbersElement.innerText = arrayNumbers;

    
    //timer che parte quando schiaccio il pulsante
    setTimeout(disappearNumbersAndAppearPrompt, 10000);
    
    const numeriUguali = [];

    const numeriDiversi = [];


    for(i = 0; i < arrayNumbers.length; i++) {

        if(arrayNumbers[i] != disappearNumbersAndAppearPrompt) {

            numeriDiversi.push(disappearNumbersAndAppearPrompt);
        } else {
            numeriUguali.push(disappearNumbersAndAppearPrompt);
        }
    }
    
    console.log(numeriDiversi)
   /*
    if(numeriDiversi.length > 0){
        console.log("hai perso, " + "i numeri sbagliati sono: " + numeriDiversi + "e questi sono i numeri giusti: " + numeriUguali);
        
    } else {
        console.log("hai vinto" + numeriUguali);
    }
    */
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

//funzione che crea un array di numeri random 
function repeatRandomNumber(max){

    const randomNumbers = [];

    for(i = 0; i < 5; i++){

        let numbers = createRandomNumbers(max);

        randomNumbers.push(numbers);
    }  

    return randomNumbers;

}

//funzione che scomparire i numeri presenti in pagina e fa apparire 5 prompt che inserisce in un array
function disappearNumbersAndAppearPrompt(){
    //scompaiono i numeri 
    numbersElement.style.display = "none";

    const userNumbers = [];

    //appaiono i prompt
    for(i = 0; i < 5; i++){
        //memorizzo il prompt in una variabile 
        let userNumbersAsked = parseInt (prompt("inserisci i numeri uno alla volta"));
        //pusho i numeri nell'array
        userNumbers.push(userNumbersAsked);
    }
  
    
    return userNumbers;
    
}