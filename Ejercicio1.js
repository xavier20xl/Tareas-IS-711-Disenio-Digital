// ejercicio1.js

// fetch() hace la petición HTTP y devuelve una Promesa
fetch("https://jsonplaceholder.typicode.com/users")

  // .then() se ejecuta cuando la Promesa se resuelve (respuesta llegó)
  .then(function(Usuariosresponse) {

    return Usuariosresponse.json();

  })

  // Ahora 'usuarios' es el array de objetos que devuelve la API
  .then(function(usuarios) {
    
    // forEach itera sobre cada elemento del array
    usuarios.forEach(function(usuario) {
      console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`);
    });
  })

  // .catch() captura CUALQUIER error de toda la cadena
  .catch(function(error) {
    console.error("Ocurrió un error:", error.message);
  });