export class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log(`El animal ${this.nombre} hace un sonido`);
        document.querySelector("#saludo").innerHTML = `El animal ${this.nombre} hace un sonido`;
    }
}

export class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    moverCola(){
        console.log(`El perro ${this.nombre} está moviendo la cola`);
        document.querySelector("#estudios").innerHTML = `El perro ${this.nombre} está moviendo la cola`;

    }
}