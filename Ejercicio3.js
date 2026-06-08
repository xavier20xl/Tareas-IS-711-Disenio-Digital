// ejercicio3.js

// Mismo ejercicio 2
function consultarBaseDeDatos() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const numero = Math.floor(Math.random() * 100);
      console.log(`Número generado: ${numero}`); 
      if (numero % 2 === 0) {
        resolve("Consulta exitosa"); 
      } else {
        reject("Error en la consulta"); 
      }
    }, 3000); 
  });
}

// la palabra 'async' convierte la función en asíncrona
// toda función async DEVUELVE una promesa automáticamente
// y SOLO dentro de una función async puedes usar 'await'
const ejecutarConsulta = async () => {

    try {

        // 'await' PAUSA esta función hasta que la promesa se resuelva
        // mientras espera, el resto del programa sigue corriendo (no bloquea todo)
        // si resolve() → 'resultado' recibe ese valor y sigue la línea siguiente
        const resultado = await consultarBaseDeDatos()
        console.log(resultado)

    } catch (error) {
        // si la promesa hace reject() → el error "salta" directo al catch
        // 'error' es lo que se pasó a reject()
        console.log(error)

    } finally {
        // igual que .finally() — se ejecuta siempre
        console.log('fin de la consulta')
    }
}

ejecutarConsulta()