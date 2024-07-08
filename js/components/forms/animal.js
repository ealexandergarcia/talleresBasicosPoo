export const formAnimal= async () =>{
    return /*html*/`
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad">
    <label for="raza">Raza:</label>
    <input type="text" id="raza" name="raza">
    <button type="button" id="btn-saludar">Crear Perro</button>
    <div id="saludo"></div>
    <div id="estudios"></div>
    `;
}