



let formularioIngreso = document.getElementById("formIngreso");
let usuario = document.getElementById ("usuario");
let contraseña = document.getElementById ("contraseña");
let buttonIngreso= document.getElementById ("button");
let buttonRegistro= document.getElementById("buttonRegistro");
let crearUsuario= document.getElementById ("form-registro");
let nombreApellido= document.getElementById ("nombre");
let email= document.getElementById ("email");
let cel= parseInt(document.getElementById ("cel"));
let nacimiento= parseInt( document.getElementById ("nacimiento"));
let usuarioRegistro= document.getElementById ("usuarioR");
let contraseñaRegistro= document.getElementById ("contraseñaR");
let respuesta = document.getElementById ("respuesta");
let respuestaR= document.getElementById("respuestaR");


class persona {
    constructor(nombre,nacimiento, email, cel, usuario,contraseña){
        this.nombre=nombre;
        this.nacimiento=nacimiento;
        this.email=email;
        this.cel=cel;
        this.usuario=usuario;
        this.contraseña=contraseña;
    }
}




//validar ingreso de usuario
buttonIngreso.addEventListener ("click", validar);

function validar (e){

    //traigo el JSON del localstorage
    //const objJSON = JSON.parse(localStorage.getItem(document.getElementById ("usuario").value));
      
    
    
    if (//( objJSON != null && 
        //objJSON.usuario == document.getElementById (usuario).value &&
        //objJSON.contraseña == document.getElementById (contraseña).value ))
        //localStorage.getItem (document.getElementById ("usuario").value) == localStorage.getItem (document.getElementById ("usuarioR").value)&&
        //localStorage.getItem (document.getElementById ("contraseña").value) ==localStorage.getItem (document.getElementById ("contraseñaR").value))

        (localStorage.getItem (document.getElementById ("usuario").value)) && 
        (localStorage.getItem (document.getElementById ("contraseña").value) )!= null)
        

    { e.preventDefault()
       
    
    
        respuesta.innerHTML = "Usuario y/o contraseña invalidos";

    
        
    }           
       else if (
                 (usuario.value == "") || (contraseña.value=="")
       )
       
       {
        e.preventDefault()

        respuesta.innerHTML= "Complete todos los campos"
        

       }

       else{

        e.preventDefault()
            pedirTurnos()
       }
      
    }
               



//direccionar a la pagina de turnos
 


function pedirTurnos(){
    window.location.href= "../html/turnos.html"
   
}

//registro de usuario

buttonRegistro.addEventListener ("click", guardarDatos)
function guardarDatos(){

if( localStorage.getItem (document.getElementById ("usuarioR").value) != null){
    alert("el usuario ya existe")}
    

else {  
    //alert("guardando usuario")  
    const personaNueva= new persona( 
        document.getElementById ("nombre").value,
        document.getElementById ("nacimiento").value,
        document.getElementById ("email").value,
        document.getElementById ("cel").value,
        document.getElementById ("usuarioR").value,
        document.getElementById ("contraseñaR").value
        )

        ingreso()
    
        const PersonaIngresadaAJSON= JSON.stringify (personaNueva);
        localStorage.setItem (personaNueva.usuario,PersonaIngresadaAJSON)
        const traidaDelStorage= local.localStorage.getItem (personaNueva)
        const objJSON = JSON.parse (traidaDelStorage)
        
    
    }

       

      


}


//redirecciona a una pagina que le dice al usuario que ya se registro
function ingreso(){
    window.location.href= "../html/usuarioIngresado.html";
}
   


