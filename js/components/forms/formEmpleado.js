export const formEmpleado= async () =>{
    return /*html*/`
    <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" /><br /><br />
      <label for="edad">Edad:</label>
      <input type="number" id="edad" name="edad" /><br /><br />
      <label for="sueldo">sueldo:</label>
      <input type="number" id="sueldo" name="sueldo" /><br /><br />
      <label for="departamento">departamento:</label>
      <input type="text" id="departamento" name="departamento"><br><br>
      <button type="button" id="btn-calcular">Calcular Salario</button>
      <div id="salarioSinB"></div>
      <div id="salarioConB"></div>
    `;
}