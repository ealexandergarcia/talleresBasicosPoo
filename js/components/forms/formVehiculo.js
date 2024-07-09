export const formVehiculo= async () =>{
    return /*html*/`
    <label for="marca-coche">Marca:</label>
    <input type="text" id="marca-coche" />
    <label for="modelo-coche">Modelo:</label>
    <input type="text" id="modelo-coche" />
    <label for="velocidad-coche">Velocidad (km/h):</label>
    <input type="number" id="velocidad-coche" />
    <label for="combustible-coche">Combustible:</label>
    <input type="text" id="combustible-coche" />
    <button type="button" id="btn-coche">Crear Coche y Acelerar</button>
    <p id="resultado-coche"></p>
    `;
}