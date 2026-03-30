const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 2: Métodos de transformación y filtrado ---\n");
console.log("5. Filtrar por categoría con .filter():\nCreá un nuevo array que contenga solo los productos cuya categoría sea 'Ropa'.\nMostrar en consola.\n");

const CATEGORIA = "Ropa";

const categoriaRopa = productos.filter((producto) => producto.categoria === CATEGORIA);

console.log(categoriaRopa);
