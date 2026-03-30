const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 2: Métodos de transformación y filtrado ---\n");
console.log("4. Obtener solo los nombres con .map():\nCreá un nuevo array que contenga únicamente los nombres de los productos.\nMostralo en consola.\nResultado esperado: ['Remera', 'Pantalón', 'Zapatillas', 'Gorra', 'Campera']\n");

const nombres = productos.map((producto) => producto.nombre);

console.log(nombres);
