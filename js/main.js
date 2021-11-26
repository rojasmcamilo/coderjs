/*

alert("Bienvenido a tu simulador de credito")
alert("Primero necesito validar tus datos")
let nombre = prompt("¿Cual es tu nombre?")
if (nombre == ""){
    alert("no ingresaste ningun valor")
    nombre = prompt("¿Cual es tu nombre?")
}
let apellido = prompt("¿Cual es tu apellido?")

if (apellido == ""){
    alert("no ingresaste ningun valor")
    apellido = prompt("¿Cual es tu apellido?")
}

let edad = prompt("¿Cuantos años tienes?")

if(edad == ""){
    alert("sin los datos correctos no podras acceder al simulador")
    edad = prompt("Vamos de nuevo. ¿Cuantos años tienes?")
}

edad = parseInt(edad);

if (edad < 18) {
    alert("Disculpa no tienes la edad necesaria para acceder a nuestro sistema de credito");
    reload();
} else if (edad >= 18){
    alert("Gracias")
}
let bienvenida = "Bienvenido " + nombre + " " + apellido + ". Vamos a continuar con tu proceso"
alert(bienvenida)

*/
alert("Bienvenido a tu simulador de credito")
let tipoDeCredito = prompt("Primero selecciona tu tipo de credito:\na. Credito Rapido (menos de 12 cuotas. Interes 3%)\nb. Credito a largo plazo (mayor a 13 cuotas. Interes 5%)\nIndica unicamente la letra de tu seleccion")

function totalFinanciacion(valor, numeroCuotas, Interes){
    let cuotaFija = valor/numeroCuotas + (valor*Interes/100) 
    return cuotaFija
}





if (tipoDeCredito == "a" || tipoDeCredito == "A"){

    alert("Seleccionaste a. Credito Rapido (menos de 12 cuotas. Interes 3%)")
    let cuotasA = prompt("Selecciona la cantidad de cuotas entre 1 y 12:")
    let valorAFinanciar;
    if (cuotasA > 12 || cuotasA <= 0){
        alert("Ingresaste un valor incorrecto");
        cuotasA = prompt("Selecciona la cantidad de cuotas entre 1 y 12:");
        if (cuotasA > 12 || cuotasA <= 0){
            alert("Ingresaste un valor incorrecto, vuelve a empezar")
            reload() }
    } else if (cuotasA <= 12 || cuotasA < 0){
        valorAFinanciar = prompt("Ingresa el monto de dinero a financiar");
        let cuotaFija = parseInt(totalFinanciacion(valorAFinanciar, cuotasA, 3))
        for (let i = 1; i <= cuotasA ; i++){
            alert("El valor de la cuota por el mes " + i + " es " + cuotaFija )
        }

    }


} else if ( tipoDeCredito == "b" || tipoDeCredito == "B" ){
    alert("Seleccionaste b. Credito a largo plazo (mayor a 13 cuotas. Interes 5%)")
    let cuotasB = prompt("Selecciona la cantidad de cuotas mayor a 13:")
    let valorBFinanciar;
    if (cuotasB < 12){
        alert("Ingresaste un valor incorrecto");
        cuotasB = prompt("Selecciona la cantidad de cuotas mayor a 13:");
        if (cuotasB > 12 || cuotasB <= 0){
            alert("Ingresaste un valor incorrecto, vuelve a empezar")
            reload() }
    } else if (cuotasB > 12){
        valorBFinanciar = prompt("Ingresa el monto de dinero a financiar");
        let cuotaFija = parseInt(totalFinanciacion(valorBFinanciar, cuotasB, 5))
        for (let i = 1; i <= cuotasB ; i++){
            alert("El valor de la cuota por el mes " + i + " es " + cuotaFija )
        }
    }
} else {
    alert("No entendi tu eleccion, vuelve a empezar.")
}

let hacerNegocio = prompt("Desea continuar con la solicitud del credito\n1.Si 2.No")

if (hacerNegocio == 1){
    alert("Empecemos el tramite")
} else if ( hacerNegocio == 2){
    let telefono = prompt("Dejanos tu numero de telefono y uno de nuestros asistentes te contactara")
    prompt("Este numero es correcto " + telefono +"\n+1.Si 2.No" )
}