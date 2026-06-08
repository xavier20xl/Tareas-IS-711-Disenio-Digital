// ejercicio2.js

function consultarBaseDeDatos() {
  
  // Creamos y retornamos una nueva Promesa
  return new Promise(function(resolve, reject) {
    
    // setTimeout simula que la consulta tarda 3 segundos
    setTimeout(function() {
      
      // Math.random() genera un número entre 0 y 1
      // Math.floor() lo redondea hacia abajo → resultado: 0 ó 1
      const numero = Math.floor(Math.random() * 100); // entre 0 y 99
      
      console.log(`Número generado: ${numero}`); 
      
      if (numero % 2 === 0) {
        // % es el operador módulo (residuo de la división)
        // Si el residuo al dividir entre 2 es 0, el número es par
        resolve("Consulta exitosa"); // la Promesa se RESUELVE
      } else {
        reject("Error en la consulta"); // la Promesa se RECHAZA
      }
      
    }, 3000); 
  });
}

// Llamamos la función y manejamos el resultado
console.log("Iniciando consulta...");

consultarBaseDeDatos()
  .then(function(mensaje) {
    // 'mensaje' es el valor que pasamos a resolve()
    console.log("Éxito:", mensaje);
  })
  .catch(function(error) {
    // 'error' es el valor que pasamos a reject()
    console.log("Error capturado:", error);
  });

console.log("Este mensaje aparece ANTES que el resultado (JS no espera)");

