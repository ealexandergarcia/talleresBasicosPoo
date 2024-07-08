class Persona {
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

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}.`);
        document.getElementById("estudios").innerHTML = `Estoy estudiando ${this.carrera}.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const btnSaludar = document.getElementById("btn-saludar");

    btnSaludar.addEventListener("click", function() {
        const nombre = document.getElementById("nombre").value;
        const edad = parseInt(document.getElementById("edad").value);
        const sexo = document.getElementById("sexo").value;
        const carrera = document.getElementById("carrera").value;

        const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
        estudiante1.saludar();
        estudiante1.estudiar();

        const esMayor = Persona.esMayorDeEdad(edad);
        console.log(`Es mayor de edad: ${esMayor ? "si":"no"} `);
    });
});