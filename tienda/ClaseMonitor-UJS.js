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

let monitor1 = new Monitor("Hp","1024x500")
let monitor2 = new Monitor("Dell","890x720")
console.log(monitor1.toString())
console.log(monitor2.toString())