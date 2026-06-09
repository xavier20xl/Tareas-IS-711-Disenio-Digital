// ejercicio4.js

const productos = [
    { nombre: 'Televisor',   precio: 500, categoria: 'Electrónica' },
    { nombre: 'Silla',       precio: 100, categoria: 'Muebles' },
    { nombre: 'Laptop',      precio: 800, categoria: 'Electrónica' },
    { nombre: 'Mesa',        precio: 200, categoria: 'Muebles' },
    { nombre: 'Auriculares', precio: 150, categoria: 'Electrónica' },
]

const categoriaFiltro = 'Electrónica'
const productosFiltrados = productos.filter((producto) => {

    // por cada producto evalúa esta comparación:
    return producto.categoria === categoriaFiltro
})

// map() transforma CADA elemento en otra cosa
const nombresProductos = productosFiltrados.map((producto) => {

    // de cada objeto completo extraemos solo el string del nombre
    return producto.nombre
})

// recibe (acumulador, elementoActual) y un valor inicial al final
const precioTotal = productosFiltrados.reduce((acumulador, producto) => {

    // en cada vuelta sumamos el precio del producto al acumulador:
    return acumulador + producto.precio

}, 0) // <- 0 es el valor con el que arranca el acumulador

console.log('Productos filtrados:', productosFiltrados)
console.log('Nombres:', nombresProductos)
console.log(`Precio total de ${categoriaFiltro}: $${precioTotal}`)