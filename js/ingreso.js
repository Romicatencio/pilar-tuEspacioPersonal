
//validar ingreso de usuario


let formularioIngreso = document.getElementById("form-ingreso");
let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let button= document.getElementById ("button");
let buttonR= document.getElementById("buttonRegistro");
let crearUsuario= document.getElementById ("form-registro");
let nombreApellido= document.getElementById ("nombre");
let email= document.getElementById ("email");
let cel= parseInt(document.getElementById ("cel"));
let nacimiento= parseInt( document.getElementById ("nacimiento"));
let usuarioRegistro= document.getElementById ("usuarioR");
let contraseñaRegistro= document.getElementById ("contraseñaR");
let respuesta = document.getElementById ("respuesta");
let respuestaR= document.getElementById("respuestaR");

formularioIngreso.addEventListener ("submit", validar);

function validar (e){

    
    if ((usuario.value == "") || (contraseña.value == ""))

    { e.preventDefault()
       
    
    
        respuesta.innerHTML = "Usuario y/o contraseña invalidos";

    
        
    }

               

    else {

        e.preventDefault()

        respuesta.innerHTML = `Bienvenido : ${usuario.value}`;
        
        pedirTurnos()
        
    }
    



}

//direccionar a la pagina de turnos
 
button.addEventListener ("test", pedirTurnos);

function pedirTurnos(){
    window.location.href= "../html/turnos.html"

   
}


//crear usuario



crearUsuario.addEventListener ("submit", validarRegistro)

function validarRegistro (e){
      if ((nombreApellido.value =="") || (email.value=="")||(cel.value=="")||(nacimiento.value=="")||(usuarioRegistro.value=="") || (contraseñaRegistro.value==""))

      {
        e.preventDefault();

        respuestaR.innerHTML= "Complete todos los campos";

        
      }

      else{
        
        
        e.preventDefault();
        ingreso()

        respuestaR.innerHTML=`Bienvenido ${nombreApellido.value}`;

      }
}

//direccionar a la pagina html de usuario ingresado

buttonR.addEventListener ("test", ingreso);

function ingreso(){
    window.location.href= "../html/usuarioIngresado.html";

   
}

//sacar turnos.

let servicio= document.getElementById ("servicio").value;
let dias= document.getElementById ("dias").value;
let hora= document.getElementById ("hora").value;
let pago= document.getElementById ("pagos").value;
let opinion = document. getElementById ("opinion");
let sugerencia= document.getElementById ("sugerencia");
let buttonEnviar= document.getElementById ("buttonEnviar");
let respTurnos= document.getElementById ("respuesta-turnos");
let sacarTurnos= document.getElementById ("formSacarTurnos");

//validar este formulario


let turnos = []



function sacarTurno (ev){
    class Turno {
        constructor(servicio,dia,hora,pago){
            this.servicio=servicio;
            this.dia=dia;
            this.hora=hora;
            this.pago=pago
            this.opinion=opinion;
            this.sugerencia=sugerencia
        }
    }
     
    const turno= new Turno (servicio, dia ,hora, pago,opinion,sugerencia)

   turnos.push (Turno)
    

   {ev.preventDefault ()

    
}}



//guardo en el storage

localStorage.setItem ("TurnoPedido", JSON.stringify (turnos))
localStorage.getItem ("servicio");
localStorage.getItem ("dias")
localStorage.getItem ("hora")
localStorage.getItem ("pago")
localStorage.getItem ("opinion")
localStorage.getItem ("sugerencia")

mostrarInfo (turnos)

const mostrarInfo= (turnos) =>{
    if ( (servicio =="") || (dias =="")||(hora=="")||(pago=="")||(opinion =="")|| (sugerencia=="") )

   {ev.preventDefault ()

    respTurnos.innerHTML= "Por favor, completa todos los campos"
}

else{
    ev.addEventListener();

    respTurnos.innerHTML= ` Has elegido el servicio ${servicio.value}, el día ${dias.value} \n. Tu horario es: ${hora.value} y tu forma de pago será: ${pago.value} \n. Muchas gracias por elegirnos `
}
}


buttonEnviar.addEventListener ("test",sacarTurno)

function sacarTurno(){
    respTurnos.innerHTML= ` Has elegido el servicio ${servicio.value}, el día ${dias.value} \n. Tu horario es: ${hora.value} y tu forma de pago será: ${pago.value} \n. Muchas gracias por elegirnos `

}

/* function sacarTurno (){
    ev.addEventListener();

    respTurnos.innerHTML= ` Has elegido el servicio ${servicio.value}, el día ${dias.value} \n. Tu horario es: ${hora.value} y tu forma de pago será: ${pago.value} \n. Muchas gracias por elegirnos `
    turnos.push (Turno)
}
 


sacarTurnos.addEventListener ("test", enviarTurnos)

function enviarTurnos (ev){
   if ( (servicio =="") || (dias =="")||(hora=="")||(pago=="")||(opnion =="")|| (sugerencia=="") )

   {ev.preventDefault ()

    respTurnos.innerHTML= "Por favor, completa todos los campos"
}

else{
    ev.addEventListener();

    respTurnos.innerHTML= ` Has elegido el servicio ${servicio.value}, el día ${dias.value} \n. Tu horario es: ${hora.value} y tu forma de pago será: ${pago.value} \n. Muchas gracias por elegirnos `
}
}

buttonEnviar.addEventListener ("test",sacarTurno)

function sacarTurno (ev){
    ev.addEventListener();

    respTurnos.innerHTML= ` Has elegido el servicio ${servicio.value}, el día ${dias.value} \n. Tu horario es: ${hora.value} y tu forma de pago será: ${pago.value} \n. Muchas gracias por elegirnos `
    
}*/