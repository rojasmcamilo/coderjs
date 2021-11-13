alert("Bienvenido a mi pagina de JavaScript")
alert("Para continuar necesito validar tus datos")
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
    alert("Ey Ey Ey! No te quieras hacer el vivo, el contenido de nuestra pagina no es para todos")
    edad = prompt("Vamos de nuevo. ¿Cuantos años tienes?")
}

edad = parseInt(edad);

if (edad < 18) {
    alert("Disculpa no tienes la edad necesaria para acceder a esta informacion tan sensual")
} else if (edad >= 18){
    alert("Perfecto estas en la edad de acceder al este grandioso mundo")
}
alert("Muchas gracias por tu informacion")
alert("Mientras validamos tu informacion cuantanos un poco mas acerca de ti")

let colorFavorito = prompt("¿Cual es tu color favorito?")
if( colorFavorito == ""){
    alert("Porque eres tan mala persona, comparte un poco de tu vida eh!")
    alert("vamos de nuevo")
    colorFavorito = prompt("¿Cual es tu color favorito? Si trampa esta vez")
}
if( (colorFavorito == "amarillo") || (colorFavorito == "rosa") || (colorFavorito == "verde") || (colorFavorito == "Amarillo") || (colorFavorito == "Rosa") || (colorFavorito == "Verde") || (colorFavorito == "AMARILLO") || (colorFavorito == "ROSA") || (colorFavorito == "VERDE")) {
    alert(colorFavorito + "??? Que gustos raros :)")
} else {
    alert("Mi color favorito tambien es el " + colorFavorito +" <3")
}

    alert("Espera!!! Terminamos de validar tu informacion")
    alert("Lo siento con la informacion que nos brindaste no hemos podido validar que no eres un robot")
    alert("Es una mentira jajaja")
    
    let bienvenida = "Bienvenido " + nombre + " " + apellido + ". Puedes continuar a esta grandiosa pagina"
    alert(bienvenida)
