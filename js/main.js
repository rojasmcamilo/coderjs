

let products = []
let appoinments = []

class ProductsAzuleno {
    constructor ( name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

class Appoinments {
    constructor ( nameOfPacient, service, date, hour, price){
        this.nameOfPacient = nameOfPacient;
        this.service = service;
        this.date = date;
        this.hour = hour;
        this.price = price;
    }

}

let schedule = function(nameOfPacient, service, date, hour, price){
    let pacient = prompt("Para quien es el servicio:\n1.Para mi\n2.Es para otra persona")
    if(pacient == 1){
        nameOfPacient = localStorage.getItem('name')
    } else if (pacient == 2 ){
        nameOfPacient = prompt("Nombre del paciente")
    } else{
        alert("Seleccionaste una opcion equivocada, volvamos a iniciar")
        location.reload()
    }
    let chooseService = prompt("Selecciona el servicio por el cual estas interesado. \n1.Masaje relajante - 2000.00\n2.Limpieza Facial - 1500.00\n3.Manicure - 1000.00")
    if (chooseService == 1){
        service = "Masaje relajante" 
        price = "2000.00"
    }else if(chooseService == 2){
        service = "Limpieza facial" 
        price = "1500.00" 
    }else if(chooseService == 3){
        service = "Manicure"
        price = "1000.00"
    } else {
        alert("Seleccionaste una opcion equivocada, volvamos a iniciar")
        location.reload()
    }
    date = prompt("Selecciona un dia de Lunes a Viernes")
    hour = prompt("Los turnos sin de una hora dede 8 am. (Ejm: 8am - 9am - 10am)")
    let result = new Appoinments (nameOfPacient, service, date, hour, price)
    return result
}


alert("Bienvenida a Azuleno. Tu especialista en cuidados de la piel.\nComencemos")

let name;
if(localStorage.getItem("name") == ""){
    name = prompt("Primero quisiera saber tu nombre")
localStorage.setItem('name', name)
}

if( name == ''){
    alert("En importante poder validarte para darte acceso")
    location.reload()
} else {
    alert("Gracias")
}

let actions = prompt(`Hola ${localStorage.getItem('name')}. Cuentame como te puedo ayudar hoy.\n 1. Agendar una nueva cita 2. Ver catalogo de productos 3. Navegar en la pagina`)
let agenda

if (actions == 3) {
    alert(`Perfecto ${localStorage.getItem('name')}! Que tengas un excelente dia`)
} else if ( actions == 1) {
    agenda = schedule()
    agenda = JSON.stringify(agenda)
    sessionStorage.setItem('agenda', agenda) 
    alert("Por favor confirmar la informacion en la pantalla")
} else if ( actions == 2) {
    alert("Te redireccionaremos a nuestra pagina, para que puedas navegar en nuestros productos y servicios")
} else {
    alert( `No seleccionaste una opcion valida, te dejo para que navegues por la pagina ${localStorage.getItem('name')}`)
}
let cita = document.getElementById("appointment")


let agendaJSON = JSON.parse(sessionStorage.getItem("agenda"))

let confirmacion = `Nombre: ${agendaJSON.nameOfPacient} <br>
Procedimiento: ${agendaJSON.service} <br>
Valor: ${agendaJSON.price} <br>
Dia: ${agendaJSON.date} <br>
Hora: ${agendaJSON.hour} <br>
<button id="addNew" onclick="confirmar()">Confirmar</button>
 
`

cita.innerHTML = confirmacion

let confirmar = () => alert("Tu cita ha sido confirmada")