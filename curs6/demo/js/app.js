
import SalutMain, {add,inm} from './main.js' 



let x = 15;
let y = 10;

let suma = add(x,y);
let produs = inm(x,y);

function salut(){
    console.log('salut')
}

console.log(`suma numerelor ${x} si ${y} este: ${suma}`)
console.log(`produsul numerelor ${x} si ${y} este: ${produs}`)
salut()

let sall = SalutMain('vasile');
console.log(sall)