'use strict'

let userNumber = Math.floor(Math.random() * (0, 6) + 1);
let pcNumber = Math.floor(Math.random() * (0, 6) + 1);

debugger

while(userNumber == pcNumber) {
    userNumber = Math.floor(Math.random() * (0, 6) + 1);
    pcNumber = Math.floor(Math.random() * (0, 6) + 1);
}

console.log(userNumber);
console.log(pcNumber);

if(userNumber > pcNumber) {
    console.log('Vince il giocatore');
} else {
    console.log('Vince il computer');
}