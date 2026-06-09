// ejercicio5.js


const tareas = []

// recibe una descripción y agrega un objeto al array
const agregarTarea = (descripcion) => {

    // .push() añade un elemento al final del array
    tareas.push({
        descripcion,       
        completada: false   // toda tarea nueva nace sin completar
    })
    console.log(`Tarea agregada: "${descripcion}"`)
}

const marcarTareaComoCompletada = (descripcion) => {

    // .find() devuelve el PRIMER elemento cuyo callback dé true
    // si no encuentra ninguno, devuelve undefined
    const tarea = tareas.find((t) => t.descripcion === descripcion)

    if (tarea) {

        // mutamos directamente el objeto: como los objetos se pasan por
        // referencia, cambiar 'tarea' también cambia el objeto dentro del array
        tarea.completada = true
        console.log(`Tarea completada: "${descripcion}"`)
    } else {
        console.log(`No se encontró la tarea: "${descripcion}"`)
    }
}

const listarTareasPendientes = () => {

    // filter conserva solo las que NO están completadas
    const pendientes = tareas.filter((t) => t.completada === false)

    console.log('\nTareas pendientes:')
    pendientes.forEach((t) => {
        console.log(` - ${t.descripcion}`)
    })
}

const listarTareasCompletadas = () => {

    // filter conserva solo las que SÍ están completadas
    const completadas = tareas.filter((t) => t.completada === true)

    console.log('\nTareas completadas:')
    completadas.forEach((t) => {
        console.log(` - ${t.descripcion}`)
    })
}

// --- uso ---
agregarTarea('Comprar leche')
agregarTarea('Llamar al médico')
agregarTarea('Estudiar JavaScript')

marcarTareaComoCompletada('Comprar leche')

listarTareasPendientes()
listarTareasCompletadas()