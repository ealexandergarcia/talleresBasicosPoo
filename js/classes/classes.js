export class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
        document.getElementById("saludo").innerHTML = `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

export class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}.`);
        document.getElementById("estudios").innerHTML = `Estoy estudiando ${this.carrera}.`;
    }
}


export class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log(`El animal ${this.nombre} hace un sonido`);
        document.getElementById("saludo").innerHTML = `El animal ${this.nombre} hace un sonido`;
    }
}

export class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    moverCola(){
        console.log(`El perro ${this.nombre} está moviendo la cola`);
        document.getElementById("estudios").innerHTML = `El perro ${this.nombre} está moviendo la cola`;

    }
}