export class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
        document.querySelector("#saludo").innerHTML = `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
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
        document.querySelector("#estudios").innerHTML = `Estoy estudiando ${this.carrera}.`;
    }
}
