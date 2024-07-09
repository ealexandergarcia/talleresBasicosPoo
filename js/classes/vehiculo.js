export class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad += 10;
    }

    static convertirKmHEnMph(kmh) {
        return kmh / 1.609;
    }
}

export class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar() {
        this.velocidad += 20;
        const velocidadMph = Vehiculo.convertirKmHEnMph(this.velocidad);
        document.getElementById("resultado-coche").innerHTML = `El auto marca ${this.marca} ${this.modelo} tiene una cantidad de combustible de  ${this.combustible} y acelero a ${velocidadMph} Mph o ${this.velocidad} Kmh.`;
    }
}
