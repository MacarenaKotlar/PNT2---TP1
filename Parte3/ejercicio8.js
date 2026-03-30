const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 3: Métodos de validación ---\n");
console.log("8. Verificar con .some():\nUsá .some() para comprobar si existe algún producto con un precio mayor a $10.000.\nMostrá el resultado (true o false).\n");

const PRECIO_MIN = 10000;

const existe = productos.some((producto) => producto.precio > PRECIO_MIN);

console.log(existe);