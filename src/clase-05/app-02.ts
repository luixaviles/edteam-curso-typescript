// Usar una libreria externa JavaScript: lodash
// package.json
// npm init -y
// npm install lodash --save
import {random} from 'lodash';

function numeroAleatorio(a: number, b: number) {
    return random(a, b);
}

console.log('numeroAleatorio(1, 10)', numeroAleatorio(1, 10));
console.log('random(1, 100)', random(1, 100));
console.log('random(50, 80)', random(50, 80));