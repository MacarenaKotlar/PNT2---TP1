const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 2: Métodos de transformación y filtrado ---\n");
console.log("5. Filtrar por categoría con .filter():\nCreá un array que contenga todos los productos cuyo precio sea mayor a $3000.\n");

const PRECIO_MIN = 3000;

const mayorA3000 = productos.filter((producto) => producto.precio > PRECIO_MIN);

console.log(mayorA3000);
