

function Book(type, autor, pagini){
    this.title = type;
    this.autor = autor;
    this.nrpagini = pagini ;
    this.toString = toString;
}

function toString(){
    return this.title + ' de ' + this.autor + ' si are ' + this.nrpagini + ' pagini'
}

function citeste(){
    return 'Acum citesc o carte';
}
export default Book;
export {citeste}