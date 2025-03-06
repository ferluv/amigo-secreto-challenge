// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Primer paso: crear una variable-array de los nombres
let amigos = [];

// Segundo, crear una función para agregar los nombres.
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el valor del campo de entrada
    let nombre = input.value.trim(); // Obtiene el input y borrar los espacios

    if (nombre) {
        amigos.push(nombre); // Agregar el nombre al array (variable)
        input.value = ""; // Limpia el input después de agregar el nombre
        actualizarLista(); // Convoca a la función para que actualize la lista
        console.log(amigos); // Muestra la variable en la consola

    } else {
        alert("Por favor, inserte un nombre"); // Un mensaje que aparecerá cuando no se agregé ningún nombre
    }
    
}

// Implementar una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); //Obtiene los elementos de la lista 
    lista.innerHTML = ""; // Limpiar la lista existente 

    // Iterar sobre el arreglo con un bucle "for"
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear <li>
        li.textContent = amigos[i]; // Asignar el nombre el amigo
        lista.appendChild(li); // Agregarlo a la lista
    };
}

// Función para sortear al amigo secreto
    // 1) Validar que haya algunos nombres ingresados
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de empezar a sortear.");
        return; 
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // 2) Generar un índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio]; // 3) Obtener el nombre sorteado

    // Mostrar el nombre seleccionado en la pantalla
    document.getElementById("resultado").innerHTML = "🎉 Amigo seleccionado: <strong>" + amigoSeleccionado + "</strong>";
    listaAmigos.style.display = "none"; //Limpia la lista de amigos
}