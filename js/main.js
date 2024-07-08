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
}

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const btnSaludar = document.getElementById("btn-saludar");

    btnSaludar.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        const sexo = document.getElementById("sexo").value;

        const persona1 = new Persona(nombre, edad, sexo);
        persona1.saludar();
    });
});