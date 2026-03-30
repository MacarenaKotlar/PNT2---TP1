const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 4: ---\n");
console.log("12.Generar mensajes personalizados con .map():\nUsá .map() para crear un array de strings como este:\n'El producto Remera cuesta $1500 y pertenece a la categoría Ropa.'\nMostrá el resultado en consola.\n");

const strings = productos.map((producto) => {
    return `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
});

console.log(strings);