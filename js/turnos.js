//sacar turnos.

turnoPedido=[];

let servicio= document.getElementById ("servicio").value;
let dias= document.getElementById ("dias").value;
let hora= document.getElementById ("hora").value;
let pago= document.getElementById ("pagos").value;
let opinion = document. getElementById ("opinion").value;
let sugerencia= document.getElementById ("sugerencia").value;
let buttonEnviar= document.getElementById ("buttonEnviar");
let respTurnos= document.getElementById ("respuesta-turnos");
let formTurnos= document.getElementById ("formSacarTurnos");

//validar este formulario


    class turno {
        constructor(servicio,dias,hora,pago){
            
            this.servicio= servicio.depilacionLaser,velaSlim,bodyUp, radiofrecuencia,ondasDeChoque, criolipolisisPorSuccion ;
            this.dias=dias.lunes, martes,miercoles, jueves, viernes;
            this.hora= hora. parseInt(10, 11, 12, 13, 14, 15, 16, 17, 18);
            this.pago= credito, debito, efectivo;
            this.opinion=opinion;
            this.sugerencia=sugerencia
        }
    }

    
   
    buttonEnviar.addEventListener ("submit",agendarTurno)
    //formTurnos.addEventListener ("submit",agendarTurno)

    function agendarTurno(e){
       
        if ( 
            (localStorage.getItem (document.getElementById ("servicio").value))
         && (localStorage.getItem (document.getElementById ("dias").value))&&
        (localStorage.getItem (document.getElementById ("hora").value)) !=null)
        
        {
         e.preventDefault ()
         alert("turno ya asignado")
        respTurnos.innerHTML= "El turno ya ha sido asignado";
    }
        
        else{
            e.preventDefault ()
            const misTurnos= new turno(
                document.getElementById ("servicio").value,
                document.getElementById ("dias").value,
                document.getElementById ("hora").value,
                document.getElementById ("pagos").value,
                document. getElementById ("opinion").value,
                document.getElementById ("sugerencia").value)
                
                alert ("su turno ha sido tomado con exito")
                
                turnoAsignado()

                const TurnosTomadosAJSON= JSON.stringify (TurnosTomadosAJSON);
                localStorage.setItem (tomandoTurnos, TurnosTomadosAJSON)
                //const TraidaDStorage= localStorage.getItem (tomandoTurnos)
                //const JsonAObjeto= JSON.parse (TraidaDStorage)
            }

            
            
    }    
    

 

   //buttonEnviar.addEventListener ("click",turnoAsignado)
   function turnoAsignado(){

   respTurnos.innerHYML= `Has escogido el servicio: ${servicio.value}, el dia ${dias.value}\n
   en el horario de las ${hora.value}`
}













    /* formTurnos.addEventListener ("submit", mostrarInfo)

    function mostrarInfo (ev){

        if ( (servicio.value =="") || (dias.value =="")||(hora.value=="")||(pago.value=="")||(opinion.value =="")|| (sugerencia.value=="") )
    
       {ev.preventDefault ()
    
        respTurnos.innerHTML= "Por favor, completa todos los campos"
    }
    
    else{
        ev.addEventListener();
    
        respTurnos.innerHTML= ` Has elegido el servicio ${servicio}, el día ${dias} \n. Tu horario es: ${hora} y tu forma de pago será: ${pago} \n. Muchas gracias por elegirnos `
    }
    }     
 */
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