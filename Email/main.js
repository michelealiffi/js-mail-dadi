'use strict'

const userEmail = prompt('Inserisci la tua Email');
console.log(userEmail);

const emailList = ["gigi.d.alessio@libero.it", "carapace229@email.it", "gmail@michele.com", 'pacchero'];


if(emailList.includes(userEmail)) {
    console.log("La tua email è " + userEmail +  " puoi accedere alla pagina");
} else {
    console.log("La tua email è " + userEmail + " non è in lista, quindi non può entrare");
}
