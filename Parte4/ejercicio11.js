const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 4: ---\n");
console.log("11.Ordenar con .sort():\nOrdená los productos por precio de menor a mayor.\nMostrá el nuevo array ordenado.\n");

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);