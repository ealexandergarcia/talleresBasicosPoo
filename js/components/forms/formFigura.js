export const formFigura = async () => {
    return /*html*/`
    <label for="color">Color:</label>
    <input type="text" id="color" name="color" /><br /><br />
    <label for="tipo">Tipo:</label>
    <select id="tipo">
      <option value="circulo">Círculo</option>
      <option value="rectangulo">Rectángulo</option>
    </select><br /><br />
    <div id="campos-dinamicos"></div>
    <button type="button" id="btn-calcular">Calcular Área</button>
    <div id="resultado"></div>
  `;
}

export const generarCamposDinamicos = (tipo) => {
    const camposDinamicos = document.getElementById("campos-dinamicos");
    camposDinamicos.innerHTML = "";
  
    if (tipo === "circulo") {
      camposDinamicos.innerHTML = /*html*/`
        <label for="radio">Radio:</label>
        <input type="number" id="radio" name="radio" /><br /><br />
      `;
    } else if (tipo === "rectangulo") {
      camposDinamicos.innerHTML = /*html*/`
        <label for="largo">Largo:</label>
        <input type="number" id="largo" name="largo" /><br /><br />
        <label for="ancho">Ancho:</label>
        <input type="number" id="ancho" name="ancho" /><br /><br />
      `;
    }
  };