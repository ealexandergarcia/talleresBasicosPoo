export const formPersona= async () =>{
    return /*html*/`
    <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" /><br /><br />
      <label for="edad">Edad:</label>
      <input type="number" id="edad" name="edad" /><br /><br />
      <label for="sexo">Sexo:</label>
      <select id="sexo" name="sexo">
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option></select
      ><br /><br />
      <label for="carrera">Carrera:</label>
      <input type="text" id="carrera" name="carrera"><br><br>
      <button type="button" id="btn-saludar">Saludar y Estudiar</button>
      <div id="saludo"></div>
      <div id="estudios"></div>
    `;
}