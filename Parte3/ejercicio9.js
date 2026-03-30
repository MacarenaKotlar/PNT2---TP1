const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 3: Métodos de validación ---\n");
console.log("9. Verificar con .every():\nUsá .every() para saber si todos los productos cuestan más de $1000.\nMostrá el resultado.\n");

const PRECIO_MIN = 1000;

const todos = productos.every((producto) => producto.precio > PRECIO_MIN);

console.log(todos);