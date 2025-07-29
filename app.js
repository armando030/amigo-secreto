// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crea un array para almacenar los nombres

let listaNombres = [];
let nombre = "";
let amigoSeleccionado = "";

// función para agregar nombres al array
function agregarAmigo(nombre) {
    document.getElementById("resultado").innerHTML = "";  
    nombre = document.getElementById("amigo").value.trim();
    if (nombre != "" && nombre.length > 2 && !listaNombres.includes(nombre)) {
        listaNombres.push(nombre);
        
        // Limpiar la lista y campo de entrada antes de mostrar los nombres
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("amigo").value = "";

        for (let i=0 ; i < listaNombres.length; i++) {
            // i: posición del elemento en el array
            document.getElementById("listaAmigos").innerHTML += `<li>${listaNombres[i]}</li>`;
        }
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
    console.log("Lista de nombres:", listaNombres);
}

// función para seleccionar un amigo al azar

function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert("Por favor, agrega al menos dos amigos para realizar el sorteo.");
        return;
    }
    
    // Seleccionar un amigo al azar
    const posicionAleatoria = Math.floor(Math.random() * listaNombres.length);
    amigoSeleccionado = listaNombres[posicionAleatoria];
    
    // Mostrar el amigo seleccionado
    document.getElementById("resultado").innerHTML = `Amigo seleccionado: ${amigoSeleccionado}`;
    
    // Limpiar la lista de amigos
    listaNombres = [];
    document.getElementById("listaAmigos").innerHTML = "";
} 
