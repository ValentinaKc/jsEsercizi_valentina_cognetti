// esercizio 1


function number (n) {
    for (let i = 0; i <= n; i++) {
        

        if ( i % 15 ==0){
            console.log('FrizzBuzz')
           }else if(i % 5==0){
            console.log('Buzz')
           }else if (i % 3==0){
            console.log('Frizz')
           }else{
            console.log(i);
           }
    }
  
}
number(50)

// partiamo dal 5==0 per far in modo che anche le altre condizioni siano verificate



// esercizio 2

function confronto (n,m){

 if(n===m){
    return true
 }else{
    return false
 }
 
} 
console.log(confronto(2,3));
console.log(confronto(2,'2'));
console.log(confronto(2,2));


// esercizio 3

let num= 1991
let num2 = 9
// trasformiamo il numero in stringa per leggere le cifre

function intero(ni){
    ni=ni.toString()
    return ni.length
}

console.log(intero(num));
console.log(intero(num2));





// esercizio 4

let dato1 = [];
// dato1 rappreseta i dati che metterò nella funzione, esempio pratico:funzione è la macchina e dato1 è la benzina...dato1 è frutta function è frullatore

function generaNumeri (numeri){

    // con for abbiamo creato il ciclo , le istruzioni
    for (let i = 0; i < numeri; i++) {
        dato1.push(Math.floor(Math.random() * 10))
        // con push abbiamo aggiunto i numeri casuali da 1 a 10
    }
        return dato1 
        // risultato finale
}

generaNumeri(5)
// invoco la funzione e passo il dato reale...quindi...questo generaNumeri(5) lo mettiamo direttamente in console.log:

console.log(generaNumeri(5));