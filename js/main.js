alert("Bienvenido a TODO-LIST")
alert("Vamos a comenzar")

let list = []

class TodoList {
    constructor ( tarea, dia, hora){
        this.tarea = tarea;
        this.dia = dia; 
        this.hora = hora
    }

    completado = ()=> alert("Haz completado la Tarea " + this.tarea + "del dia " + this.dia + "\nEsta tarea se eliminara de tu lista.");

    eliminar = () => alert("Se ha eliminado la Tarea " + this.tarea + "del dia " + this.dia)
}

function crearNuevo ( tarea, dia, hora){
    tarea = prompt("Ingresa la nueva tarea");
    dia = prompt("Ingresa el dia para realizar esta tarea");
    hora = prompt("Ingresa la hora para realizar esta tarea");

    list.push(new TodoList(tarea, dia, hora))
    return alert("La tarea se ha agregado con exito")
}

do {
    let acciones = prompt("Selecciona una accion \n1.Agregar nueva tarea 2.Ver lista de tareas 3. Salir")
    if (acciones == 3){
        alert("Que tengas buen dia. Saludos")
        break;
    } else if (acciones == 1){
        crearNuevo();
    } else if (acciones == 2){
        if (list == []){
            alert("No tienes tareas agregadas")
        } else {
            if(list.length == 1) {
                alert("Tienes " + list.length + " tarea en tu lista")
            } else {
                alert("Tienes " + list.length + " tareas en tu lista")
            }
            
            for (let tarea = 0; tarea < list.length ; tarea++   ){
                alert("Tu tarea numero " + (tarea + 1 ) + "\n" + list[tarea].tarea + "\nEsta agendada para el dia " + list[tarea].dia + " a las " + list[tarea].hora)
            }
        }
        
    } else {
        alert("No has agregado una funcion validad")
    }
} while (true)


