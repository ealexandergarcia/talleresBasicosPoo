import { Estudiante, Persona } from "./classes/persona.js";
import { Animal, Perro } from "./classes/animal.js";
import { load } from "./components/common/load.js";
import { formAnimal } from "./components/forms/animal.js";
import { formPersona } from "./components/forms/persona.js";
import { Figura, Circulo, Rectangulo } from "./classes/figura.js";
import { formFigura, generarCamposDinamicos } from "./components/forms/formFigura.js";
import { formVehiculo } from "./components/forms/formVehiculo.js";
import { Coche } from "./classes/vehiculo.js";
import { Empleado, Gerente } from "./classes/empleado.js";
import { formEmpleado } from "./components/forms/formEmpleado.js";

let formulario = document.querySelector("#formulario");

let sidebarSelect = async (e, id) => {
  e.preventDefault();
  let sidebarLinks = document.querySelectorAll(".sidebar a")
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
  })
  let selectedLink = document.querySelector(id)
  selectedLink.classList.add('active');
}

let animal = document.querySelector("#animal")
animal.addEventListener("click", async (e) => {
  await sidebarSelect(e, "#animal")
  await load();
  formulario.innerHTML = await formAnimal();
  const btnSaludar = document.querySelector("#btn-saludar");

  btnSaludar.addEventListener("click", function () {
    const nombre = document.querySelector("#nombre").value;
    const edad = parseInt(document.querySelector("#edad").value);
    const raza = document.querySelector("#raza").value;

    const animal1 = new Perro(nombre, edad, raza);
    animal1.moverCola();
    animal1.hacerSonido();

  });
})

let persona = document.querySelector("#persona")
console.log(persona);

persona.addEventListener("click", async (e) => {
  await load();
  await sidebarSelect(e, "#persona")
  formulario.innerHTML = await formPersona();
  const btnSaludar = document.querySelector("#btn-saludar");

  btnSaludar.addEventListener("click", function () {
    const nombre = document.querySelector("#nombre").value;
    const edad = parseInt(document.querySelector("#edad").value);
    const sexo = document.querySelector("#sexo").value;
    const carrera = document.querySelector("#carrera").value;

    const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
    estudiante1.saludar();
    estudiante1.estudiar();

    const esMayor = Persona.esMayorDeEdad(edad);
    console.log(`Es mayor de edad: ${esMayor ? "si" : "no"} `);
  });
})

let figura = document.querySelector("#figura")
figura.addEventListener("click", async (e) => {
  await load();
  await sidebarSelect(e, "#figura")
  formulario.innerHTML = await formFigura();
  const tipoSelect = document.querySelector("#tipo");

  tipoSelect.addEventListener("change", function () {
    generarCamposDinamicos(tipoSelect.value);
  });

  tipoSelect.value = "circulo";
  generarCamposDinamicos(tipoSelect.value);

  const btnCalcular = document.querySelector("#btn-calcular");

  btnCalcular.addEventListener("click", function () {
    const color = document.querySelector("#color").value;
    const tipo = document.querySelector("#tipo").value;
    let figura;

    if (tipo === "circulo") {
      const radio = parseInt(document.querySelector("#radio").value);
      figura = new Circulo(color, radio);
    } else if (tipo === "rectangulo") {
      const largo = parseInt(document.querySelector("#largo").value);
      const ancho = parseInt(document.querySelector("#ancho").value);
      figura = new Rectangulo(color, largo, ancho);
    }

    if (figura) {
      const area = figura.calcularArea();
      document.querySelector("#resultado").innerHTML = `El área de la figura es: ${area}`;
    } else {
      document.querySelector("#resultado").innerHTML = "Error: No se ha seleccionado una figura válida";
    }
  });
});
let vehiculo = document.querySelector("#vehiculo")
vehiculo.addEventListener("click", async (e) => {
  await load();
  await sidebarSelect(e, "#vehiculo")
  formulario.innerHTML = await formVehiculo();
  document.querySelector("#btn-coche").addEventListener("click", function () {
    const marca = document.querySelector("#marca-coche").value;
    const modelo = document.querySelector("#modelo-coche").value;
    const velocidad = parseInt(document.querySelector("#velocidad-coche").value);
    const combustible = document.querySelector("#combustible-coche").value;
    const coche = new Coche(marca, modelo, velocidad, combustible);
    coche.acelerar();

  });

})

let empleado = document.querySelector("#empleado")
empleado.addEventListener("click", async (e) => {
  await load();
  await sidebarSelect(e, "#empleado")
  formulario.innerHTML = await formEmpleado();
  document.querySelector("#btn-calcular").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre").value;
    const edad = parseInt(document.querySelector("#edad").value);
    const sueldo = parseInt(document.querySelector("#sueldo").value);
    const departamento = document.querySelector("#departamento").value;
    console.log(nombre,edad,sueldo,departamento);
    
    if (departamento.toLowerCase() == "gerente" ) {
      const gerente1 = new Gerente(nombre, edad, sueldo, departamento)
      gerente1.calcularSalarioAnual();
    } else {
      const empleado1 = new Empleado(nombre, edad, sueldo)
      empleado1.calcularSalarioAnual();
    }
  })
})

persona.click()