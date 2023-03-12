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
//memorizzo ilpulsante per controllare i numeri
let checkButtonElement = document.getElementById("controlla");

let numbersElement = document.getElementById("numeri-casuali");

let resultElement = document.getElementById("risultato");

let inputsElement = document.getElementById("numeri-utente");

//memorizzo i valori degli input
let userNumberOne = document.getElementById("numero-1");
let userNumberTwo = document.getElementById("numero-2");
let userNumberThree = document.getElementById("numero-3");
let userNumberFour = document.getElementById("numero-4");
let userNumberFive = document.getElementById("numero-5");

//dichiaro l'evento al click del button
startButtonElement.addEventListener("click", function() {
    //array di numeri casuali 
    const arrayNumbers = repeatRandomNumber(99);
    //array stampato in pagina
    numbersElement.innerText = arrayNumbers;

    const numeriUguali = [];
    
    const numeriDiversi = [];

    //timer che parte quando schiaccio il pulsante
    setTimeout(function() {
        disappearNumbers();
        checkButtonElement.addEventListener("click", function() {
            
            const userNumbers = [parseInt(userNumberOne.value), parseInt(userNumberTwo.value), parseInt(userNumberThree.value), parseInt(userNumberFour.value), parseInt(userNumberFive.value)];


            for(i = 0; i < arrayNumbers.length; i++) {
                
               if(arrayNumbers[i] != userNumbers[i]) {
                    
                   numeriDiversi.push(userNumbers[i]);
               } else {
                   numeriUguali.push(userNumbers[i]);
               }
            }

            if(numeriDiversi.length > 0){

                resultElement.innerText = "HAI PERSO, " + "i numeri sbagliati sono: " + numeriDiversi + " e questi sono i numeri giusti: " + numeriUguali; 

            } else {

                resultElement.innerText = "HAI VINTO" + numeriUguali;

            }
        
            console.log(arrayNumbers);
            console.log(userNumbers);
            console.log("questi sono i numeri diversi: " + numeriDiversi);
            console.log("questi sono i numeri uguali: " + numeriUguali);
        })  
    }, 10000);
    

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
function disappearNumbers(){

    //scompaiono i numeri 
    numbersElement.style.display = "none";

    inputsElement.style.display = "block";

}

//funzione che mi inserisce in un array i valori inseriti dal utente
function appearUserNumbers (arrayNumbers){

    const numeriUguali = [];
    
    const numeriDiversi = [];

    const userNumbers = [userNumberOne.value, userNumberTwo.value, userNumberThree.value, userNumberFour.value, userNumberFive.value];


    for(i = 0; i < arrayNumbers.length; i++) {
        
       if(arrayNumbers[i] != userNumbers) {
            
           numeriDiversi.push(userNumbers);
       } else {
           numeriUguali.push(userNumbers);
       }
    }
    return userNumbers;

}
