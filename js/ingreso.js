
//validar ingreso de usuario


let formularioIngreso = document.getElementById("form-ingreso");
let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let button= document.getElementById ("button")

formularioIngreso.addEventListener ("submit", validar);

function validar (e){

    
    if ((usuario.value == "") || (contraseña.value == ""))

    { e.preventDefault()
       
    
    
        alert ("Usuario y/o contraseña invalidos")
    }

    else{
        alert (`Bienvenido : ${usuario.value}`)
    }

    

}

//direccionar a la pagina de turnos
 
button.addEventListener ("click", pedirTurnos);

function pedirTurnos(){
    window.location.href= "../html/turnos.html"
}


//crear usuario

let crearUsuario= document.getElementById ("form-registro");
let nombreApellido= document.getElementById ("nombre");
let email= document.getElementById ("email");
let cel= document.getElementById ("cel");
let nacimiento= document.getElementById ("nacimiento");
let usuarioRegistro= document.getElementById ("usuarioR");
let contraseñaREgistro= document.getElementById ("contraseñaR");

crearUsuario.addEventListener ("submit", validarRegistro)

function validarRegistro (e){
      if ((nombreApellido =="") || (email=="")||(cel=="")||(nacimiento=="")||(usuarioRegistro=="") || (contraseñaREgistro==""))

      {
        e.preventDefault();

        alert ("Complete todos los campos")
      }

      else{
        alert (`Bienvenido ${usuarioRegistro}`)
      }
}