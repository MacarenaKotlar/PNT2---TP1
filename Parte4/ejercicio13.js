const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

const productos2 = [
{ id: 6, nombre: "Camisa", precio: 3000, categoria: "Ropa" },
{ id: 7, nombre: "Collar", precio: 5000, categoria: "Accesorios" },
{ id: 8, nombre: "Ojotas", precio: 2500, categoria: "Calzado" },
{ id: 9, nombre: "Traje", precio: 10000, categoria: "Ropa" },
{ id: 10, nombre: "Cinturón", precio: 1000, categoria: "Accesorios" }
];

console.log("--- Parte 4: ---\n");
console.log("13.Agregar productos con spread:\nCrear un nuevo array de objetos con más productos.\nUtilizar el operador spread para combinar ambos arrays de productos en un nuevo array.\nMostrar el array resultante en la consola.\n");

const productos3 = [...productos, ...productos2];

console.log(productos3);