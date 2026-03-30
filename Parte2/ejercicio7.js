const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 2: Métodos de transformación y filtrado ---\n");
console.log("7. Buscar un producto específico con .find():\nUsá el método .find() para encontrar el objeto que tenga como nombre 'Gorra'.\nMostralo completo en consola.\n");

const NOMBRE = "Gorra";

const gorra = productos.find((producto) => producto.nombre === NOMBRE);

console.log(gorra);
