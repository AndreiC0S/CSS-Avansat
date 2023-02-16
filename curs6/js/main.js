import Book, {citeste} from './book.js'

let carte = new Book('poezii','Mihai Eminescu', 250);
console.log(carte.toString());
console.log(citeste())