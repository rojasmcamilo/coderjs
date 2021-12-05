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

    nameOfPacient = name
    let typeOfService = prompt("Selecciona el servicio por el cual estas interesado: \n1. Masaje relajante - $1500.00 2. Limpieza facial - $1200.00");
    
    if (typeOfService == 1 ) {
        service = "Masaje Relajante"
        price = 1500.00
    } else if (typeOfService == 2) {
        service = "Limpieza Facial"
        price = 1200.00
    } else {
        alert("No ingresaste una opcion correcta");
        reload()
    }

    alert(`${name} nuestros horarios de atencion son de Lunes a Viernes de 8 a 17 hs`)
    date = prompt("De Lunes a Viernes de la proxima semana que dia te queda mejor")
    date.toUpperCase()
    hour = prompt("Nuestras citas tienen una duraccion de una hora. Selecciona de 8 a 17 hs, cual es el mejor horario")
    appoinments.push(new Appoinments (nameOfPacient, service, date, hour, price)) 

    return alert(`Tu cita se ha agendado con exito: \n Cita para: ${name} \n${service} \n${date} a las ${hour} \nValor ${price} `)

}



alert("Bienvenida a Azuleno. Tu especialista en cuidados de la piel. \nComencemos")

let name = prompt("Primero quisiera saber tu nombre");
localStorage.setItem("name", name)
if( name == ''){
    alert("Es importante poder validarte para darte acceso");
    reload(); 
} else {
    alert("Gracias")
}
let actions = prompt(`Hola ${name}. Cuentame como te puedo ayudar hoy.\n 1. Agendar una nueva cita 2. Ver catalogo de productos 3. Navegar en la pagina`)

if (actions == 3) {
    alert(`Perfecto ${name}! Que tengas un excelente dia`)
} else if ( actions == 1) {
    schedule();
} else if ( actions == 2) {
    alert(`Lo sentimos ${name}, esta opcion aun no esta disponible. Pero te dejamos navegar por nuestra pagina`)
} else {
    alert( `No seleccionaste una opcion valida, te dejo para que navegues por la pagina ${name}`  )
}