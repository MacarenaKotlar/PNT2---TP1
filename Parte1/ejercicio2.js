const productos = [
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("--- Parte 1: Acceso a elementos y recorrido de arrays ---\n");
console.log("2. Recorrido con for...of:\nUsá un bucle for...of para mostrar en consola el nombre y el precio de cada producto.\nFormato sugerido: 'Producto: Remera - Precio: $1500'\n");

for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}