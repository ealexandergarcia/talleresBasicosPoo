import { Estudiante, Persona } from "./classes/classes.js";
import { load } from "./components/common/load.js";
import { formPersona } from "./components/persona/persona.js";

let formulario = document.querySelector("#formulario");

let sidebarSelect = async (e, id) => {
    e.preventDefault();
    let sidebarLinks = document.querySelectorAll(".sidebar a")
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    })
    let selectedLink = document.getElementById(id)
    selectedLink.classList.add('active');
}

let animal = document.querySelector("#animal")
animal.addEventListener("click", async (e) => {
    await sidebarSelect(e, "animal")
    await load();
})

let persona = document.querySelector("#persona")
persona.addEventListener("click", async (e) => {
    await load();
    await sidebarSelect(e, "persona")
    formulario.innerHTML = await formPersona();
    const btnSaludar = document.getElementById("btn-saludar");

    btnSaludar.addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const edad = parseInt(document.getElementById("edad").value);
        const sexo = document.getElementById("sexo").value;
        const carrera = document.getElementById("carrera").value;

        const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
        estudiante1.saludar();
        estudiante1.estudiar();

        const esMayor = Persona.esMayorDeEdad(edad);
        console.log(`Es mayor de edad: ${esMayor ? "si" : "no"} `);
    });
})

let figura = document.querySelector("#figura")
figura.addEventListener("click", async (e) => {
    await sidebarSelect(e, "figura")
})

let vehiculo = document.querySelector("#vehiculo")
vehiculo.addEventListener("click", async (e) => {
    await sidebarSelect(e, "vehiculo")
})

let empleado = document.querySelector("#empleado")
empleado.addEventListener("click", async (e) => {
    await sidebarSelect(e, "empleado")
})

persona.click()