document.addEventListener("DOMContentLoaded", () => {

    // Variables
    let lista = document.getElementById("lista");

    
    // Eventos
    document.addEventListener("submit", (event) => { // Evento para crear listas
	event.preventDefault();
	let tarea = document.getElementById("task").value;
	let tareas;
	
	// Listas
	let li = document.createElement("li");
	if (tarea != "") {
	    li.innerText = tarea;
	    lista.appendChild(li);

	    // Local Storage
	    if(localStorage.getItem("tareas") === null) {
		tareas = [];
	    } else {
		tareas = JSON.parse(localStorage.getItem("tareas"));
	    }

	    tareas.push(tarea);
	    localStorage.setItem("tareas", JSON.stringify(tareas));
	} else {
	    alert("Por favor introduzca una tarea");
	}
	    
	// Boton para borrar
	let a = document.createElement("a");
	a.innerText = "X";
	a.classList = "borrar-tarea";
	li.appendChild(a);
    });

    document.addEventListener("click", (event) => { // Evento para borrar listas
	if (event.target.classList == "borrar-tarea") {
	    let opcion = confirm("¿Desea eliminar la Tarea?");
	    let task = event.target.parentElement;
	    let borrar = task.innerText.substring(0, task.innerText.length -2)
	    let tareas;
	    if (opcion === true) {
		tareas = JSON.parse(localStorage.getItem("tareas"));

		tareas.forEach((tarea, index) => {
		    if (tarea === borrar) {
			tareas.splice(index, 1);
		    } 
		});
		localStorage.setItem("tareas", JSON.stringify(tareas));
		task.remove();
		
	    }
	}
    });

    // Cargar Local Storage
    let cargarLista = () => {
	let tareas;
	    
	tareas = JSON.parse(localStorage.getItem("tareas"));

	if (tareas != null) {
	    tareas.forEach(tarea => {
		let lista = document.getElementById("lista");
		let li = document.createElement("li");
		li.innerText = tarea;
		lista.appendChild(li);

		let a = document.createElement("a");
		a.classList = "borrar-tarea";
		a.innerText = "X";
		li.appendChild(a);
	    });
	}
    }

    cargarLista();
});
