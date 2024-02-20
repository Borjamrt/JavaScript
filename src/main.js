import "./style.css";

console.log("Hola Mundo");
var precioProducto1= 50;
var precioProducto2= 30;
console.log(precioProducto1+precioProducto2);
let libro = {
    Título: "The Catcher in the Rye",
    Autor: "J.D.Salinger",
    Año_publicación: "1962",
};
console.log(libro);

const grupos = [
    {nombre: "The Beatles", año: 1960, activo: true, género: "Pop rock"},
    {nombre: "Queen", año: 1970, activo: false, género: "Rock"},
    {nombre: "AC DC", año: 1973, activo:true, genero:"Hard Rock"},
    {nombre: "Ludwig van Beethoven", año: 1770, activo: false, genero: "Clásica"},
    {nombre:"The Rolling Stones", año: 1962, activo: true, género: "Rock"}
]
function mostrarGrupo(grupo){
    console.log(`%c${grupo.nombre}`,"font-weight: bold; font-size: 16px; background-color: green; color: white");
    console.log(`Año de fundación: ${grupo.año}`);
    console.log(`Activo: ${grupo.activo ? 'Sí' : 'No'}`);
    console.log(`Género musical: ${grupo.género}`);
    console.log("\n");
}

grupos.forEach(grupo => mostrarGrupo(grupo));