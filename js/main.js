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
    let nameOfPacient = name
    let service = prompt("Selecciona el servicio por el cual estas interesado ")
    let date = prompt()
    let hour = prompt()
    let price = prompt()
    new Appoinments (nameOfPacient, service, date, hour, price)

}





alert("Bienvenida a Azuleno. Tu especialista en cuidados de la piel. \n Comencemos")
let name = prompt("Primero quisiera saber tu nombre")
if( name == ''){
    alert("En importante poder validarte para darte acceso")
} else {
    alert("Gracias")
}

let actions = prompt(`Hola ${name}. Cuentame como te puedo ayudar hoy.\n 1. Agendar una nueva cita 2. Ver catalogo de productos 3. Navegar en la pagina`)


if (actions == 3) {
    alert(`Perfecto ${name}! Que tengas un excelente dia`)
} else if ( actions == 1) {

} else if ( actions == 2) {

} else {
    alert( `No seleccionaste una opcion valida, te dejo para que navegues por la pagina ${name}`  )
}