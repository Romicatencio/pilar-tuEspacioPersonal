
// bienvenida al sitio
 alert ("Bienvenido a tu espacio personal")
alert ("Por favor sigue las instrucciones para que podamos ayudarte")

// se pide nombre completo, contraseña y usuario para ingresar

let nombreCompleto= prompt ("Ingresa tu nombre completo")

let usuario = prompt ("Ingresa un nombre de usuario") 
alert ("Tu nombre de usuario es" +" " + usuario)

let contrasenia = prompt ("Ingresa una contrasenia para"+ " " + usuario) 
alert ("Tu contrasenia elegida para"+ " " + usuario + " "+"es" + " "+ contrasenia) 

alert ("Bienvenida/o" + " "+nombreCompleto)

//servicios a ofrecer
alert ("Los servicios que podemos ofrecerte son:")

function servicio (palabra1, palabra2, palabra3,) {
    alert(palabra1 + " "+ palabra2+ " "+palabra3)
}

servicio ("vela", "slim", "max");
servicio ("body", "up", "cintura");
servicio ("radiofrecuencia", "en", "piernas");
servicio ("ondas", "de", "choque");
servicio ("criolipolisis", "por", "succion");
servicio ("depilacion", "laser", "piernas");
servicio ("depilacion", "laser", "cuerpoentero")
servicio ("depilacion", "laser", "bozo")

//precio de los servicios
let precio=prompt ("Para saber el precio de los servicios, escribelo a continuacion (s para salir")

while (precio != "s"){
    switch (precio){

    case "vela slim max":
        alert ("El precio por sesion es de $2500")
        break;

    case "body up cintura":
        alert ("El precio por sesion es de $2200")
        break;

    case "radiofrecuencia":
        alert ("El precio por sesion es de $1800")
        break;
    
    case "ondas de choque":
        alert ("El precio por sesion es de $2800")
        break;

    case "criolipolisis por sucion":
        alert ("El precio por sesion es de $3000")
        break;

    case "depilacion laser piernas":
        alert ("El precio por sesion es de $3000")
        break;

    case "depilacion laser cuerpoentero":
        alert ("El precio por sesion es de $4000")
        break;

    case "depilacion laser  bozo":
        alert ("El precio por sesion es de $1000")
        break;

    default:
    alert ("servicio no disponible")
    break;

    }
precio=prompt ("Para saber el precio de los servicios, escribelo a continuacion (s para salir")
}
// elegir el servicio


let servicioElegido
do{
    servicioElegido =prompt ("Elige los servicios que deseas contratar (fin para salir)")
    if (servicioElegido != "fin"){
        alert( "El servicio elegido es:" +" "+servicioElegido)
    }

} while (servicioElegido !="fin")

   //sacar turno
   //elegir el dia

let primerTurno = 10
let segundoTurno =11
let tercerTurno =12
let cuartoTurno = 13
let quintoTurno=14
let sextoTurno=15
let septimoTurno=16
let octavoTurno=17



let dia =prompt ("Escribe el dia que quisieras obtener el turno") 
    

if (dia == "lunes"){
    alert(" Elegiste el dia lunes.Los horarios disponibles son" +" "+primerTurno + " "+ segundoTurno +" "+ tercerTurno + " "
    + cuartoTurno + " "+ quintoTurno + " "+ sextoTurno +" "+ septimoTurno + " " + octavoTurno)
}


 else if (dia == "martes"){
    alert (" Elegiste el dia martes. Los horarios disponibles son"+" " + segundoTurno +" "+ tercerTurno + " "
    + cuartoTurno + " "+ quintoTurno + " "+ sextoTurno +" "+ septimoTurno )}

else if (dia== "miercoles")
{
    alert ("Elegiste el dia miercoles. Los horarios disponibles son" +" "+primerTurno + " "+ segundoTurno +" "+ tercerTurno + " "
     + " "+ quintoTurno + " "+ sextoTurno +" "+ septimoTurno + " " + octavoTurno)}

else if (dia== "jueves") {
    alert(" Elegiste el dia jueves. Los horarios disponibles son"+" " +primerTurno + " "+ segundoTurno +" "+ tercerTurno + " "
    + cuartoTurno + " "+ sextoTurno +" "+ septimoTurno + " " + octavoTurno)}

else if(dia== "viernes"){
    alert ("Elegiste el dia viernes. Los horarios disponibles son"+" " +primerTurno + " "+ segundoTurno +" "+ tercerTurno + " "
    + cuartoTurno + " "+ quintoTurno + " "+ septimoTurno + " " + octavoTurno)}

else {
    alert ("Ese dia el lugar se encuentra cerrado")
}

//elegir el horario del turno

let turno = prompt ("Escoge uno de los turnos disponibles")

if (turno == "10"){
    alert ("Tu horario elegido es" +" "+ primerTurno)
}

else if (turno == "11") {
    alert ("Tu horario elegido es" + " " + segundoTurno)
}

else if (turno == "12") {
    alert ("Tu horario elegido es" + " " + tercerTurno)
}

else if (turno == "13") {
    alert ("Tu horario elegido es" + " " + cuartoTurno)
}

else if (turno == "14") {
    alert ("Tu horario elegido es" + " " + quintoTurno)
}

else if (turno == "15") {
    alert ("Tu horario elegido es" + " " + sextoTurno)
}

else if (turno == "16") {
    alert ("Tu horario elegido es" + " " + septimoTurno)
}

else if (turno == "17") {
    alert ("Tu horario elegido es" + " " + octavoTurno)
}

else{
    alert ("Ese horario no esta disponible")
}


//formas de pago
let abono= prompt ("Vas a realizar tu pago: En efectivo, debito o credito")

if (abono== "efectivo"){
    alert ("Tendras un 10 % de descuento")
}

else if ( abono=="debito"){
    alert ("El precio no varia")
}

else {
    alert ("Tendras un 15% de interes")}


    //encuesta

    alert ("Porque tu opinión nos importa. Por favor responde la siguiente encuesta")

    for ( let i =1; i<=2; i ++){
        let encuesta = prompt ("Ingresa" + " "+ i  +" "+  "servicio que hayas disfrutado" )
        alert ("El servicio "+  " " +i+ " "+ "que más disfrutaste fue:" +" "+ encuesta )}
        
    

    for ( let i =1; i<=1; i ++){
        let encuesta = prompt ("Por favor escribenos alguna sugerencia para mejorar"  )
        alert ("Tu sugerencia fue: " +" " + encuesta )
        alert ("Gracias por responder")
    }

    //saludo de agradecimiento

alert ("Gracias por confiar en Pilar-Tu Espacio Personal")