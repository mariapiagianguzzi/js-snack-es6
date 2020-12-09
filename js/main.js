/* L’utente inserisce due numeri in successione, con due
prompt. Il software stampa il maggiore. */

/* let numeroUno = prompt("Inserisci un numero");
let numeroDue = prompt("Inserisci un altro numero")


const myFunction = () => {
    if (numeroUno > numeroDue){
        return numeroUno;
    }else{
        return numeroDue;
    }
}
console.log(myFunction(numeroUno,numeroDue)); */





/* L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga. */ 

/* let nomeUno = prompt ("inserisci un nome");
let nomeDue = prompt ("inserisci un altro nome");

 const myFunction = (nomeUno,nomeDue) => {
    if  (nomeUno.length < nomeDue.length){
        return `${nomeUno} ${nomeDue}`;
    } else {
        return nomeDue;
    } 
}
console.log(myFunction(nomeUno,nomeDue)); */


/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */



/* const sum = (x) => {
    let somma = 0;
    for (let i = 0; i < x; i++) {
      let numeroUtente = Number(prompt("inserisci un numero"));
      somma += numeroUtente;
    }
    return somma
  }
  
  console.log(sum(5)); */
  
/* 
const somma2 = (y) => {
    let j =0;
    let sum1 =0;
    while(j<y){
        let number = Number(prompt("inserisci un numero"));
        sum1 += number
    } 
    return sum1   
}
console.log(somma2(5));  */



/* In un array sono contenuti i nomi degli invitati alla festa del
grande Gatsby, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */ 

/* const lista = ["Pia Gianguzzi", "Tom Hiddleston", "Chris Evans", "Chris Hemsworth", "Sam Claflin"];

let nomi = prompt("inserisci il tuo nome");
const myFunction = (nomi) => {
    if (lista.includes(nomi)){
        return "sei invitato"
    } else{
        return "non sei invitato"
    }
}
console.log(myFunction(nomi));  */ 


/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array. */


let numero = [];

const myFunction = () => {
    for (let i = 0; i < 6; i++) {
        userNumber  = Number(prompt("Inserisci un numero"));
        if (userNumber % 2 !== 0) {
            numero.push(userNumber);
        } 
    }
    return (numero);
}

console.log(myFunction()); 

    
