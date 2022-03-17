class DispositivoEntrada{
    constructor(tipoEntrada, marca){
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

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton:${this._idRaton}, tipoEntrada:${this._tipoEntrada}, marca: ${this._marca}]`
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

class Monitor{
    static contadorMonitores = 0

    constructor(marca,tamanio){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamanio = tamanio
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        this._marca = marca
    }

    get tamanio(){
        return this._tamanio
    }

    set tamanio(tamanio){
        this._tamanio = this.tamanio
    }
    toString(){
        return `Monitor: [idMonitor:${this._idMonitor}, marca:${this._marca}, tamanio: ${this._tamanio}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get monitor(){
        return this._monitor
    }

    set monitor(monitor){
        return this._monitor
    }

    get teclado(){
        return this._teclado
    }

    set teclado(teclado){
        return this._teclado
    }

    get raton(){
        return this._raton
    }

    set raton(raton){
        return this._raton
    }
    toString(){
        return `Computadora: [
            idComputadora : ${this._idComputadora}
            nombre: ${this.nombre}
            ${this.monitor.toString()}
            ${this.teclado.toString()}
            ${this.raton.toString()}
        ]`;
    }
}

let raton1 = new Raton("usb","Hp")
let raton2 = new Raton("hdmi","Lenovo")
let teclado1 = new Teclado("usb","Hp","normal")
let teclado2 = new Teclado("usb","Dell","mecanico")
let monitor1 = new Monitor("Hp","1024x500")
let monitor2 = new Monitor("Dell","890x720")

let computadora1 = new Computadora("Dell",monitor1,teclado1,raton1)
let computadora2 = new Computadora("Hp",monitor2,teclado2,raton2)

console.log(computadora1.toString())
console.log(computadora2.toString())
