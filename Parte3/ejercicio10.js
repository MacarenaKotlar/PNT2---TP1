const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 3: Métodos de validación ---\n");
console.log("10.Verificar existencia con .includes():\nUsando el array de nombres creado en el punto 4, comprobá si contiene el nombre 'Campera'.\n");

const NOMBRE = "Campera";

const nombres = productos.map((producto) => producto.nombre);

const incluye = nombres.includes(NOMBRE);

console.log(incluye);