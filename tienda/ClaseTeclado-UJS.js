class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }

}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca,tipo){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
        this._tipo = tipo;
    }

    get tipo(){
        return this._tipo
    }

    set tipo(tipo){
        this._tipo = tipo
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado:${this._idTeclado}, tipoEntrada:${this._tipoEntrada}, marca: ${this._marca} tipo: ${this._tipo}]`;
    }
}

let teclado1 = new Teclado("usb","Hp","normal")
let teclado2 = new Teclado("usb","Dell","mecanico")
console.log(teclado1.toString())
console.log(teclado2.toString())