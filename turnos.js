 
// bienvenida al sitio
 alert ("Bienvenido a tu espacio personal")
alert ("Por favor sigue las instrucciones para que podamos ayudarte")

let ingresar = prompt ("Si estas registrado escribe la opcion A \n Si no estas registrado escribe la opción: Registrarme")
 
if (( ingresar == "A") ||(ingresar == "a")){
    // se pide nombre completo, contraseña y usuario para ingresar

let nombreCompleto= prompt ("Ingrese tu nombre completo")

let usuario = prompt ("Ingrese su nombre de usuario") 

let contrasenia = prompt ("Ingrese su contrasenia para" + " "+ usuario) 


alert ("Bienvenida/o" + " "+nombreCompleto)

}

//se piden datos para ingresar al sistema
else{
    
    function Registrarme (nombre, apellido, dni,nacimiento, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = parseInt (dni);
        this.nacimiento = String (nacimiento);
        this.direccion = direccion;
      }

    const usuario1= new Registrarme (prompt ("Ingresar Nombre"), prompt ("Ingresar Apellido"), prompt ("Ingresar dni"), prompt ("Ingresar fecha de nacimiento"), prompt ("Ingresar direccion"))
   
    console.log ("Tus datos ingresados fueron los siguiente: ")
    console.log ( usuario1)

    alert ( "Para ingresar, complete los ultimos datos")

    let usuario = prompt ("Ingrese su nombre de usuario") 

    let contrasenia = prompt ("Ingrese su contrasenia para" + " "+ usuario) 
    alert ("Bienvenido/a")
    

}

  function Servicios( id,nombre,precio)
{
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;  } 

const servicio0 = new Servicios (0,"depilacion laser",2000);
const servicio1 = new Servicios (1,"body up",2300);
const servicio2 = new Servicios (2,"radiofrecuencia",2500);
const servicio3 = new Servicios (3,"criolipolisis",3000);
const servicio4 = new Servicios (4,"ondas de choque",2800);
const servicio5 = new Servicios (5, "vela Slim", 3200)

const servicioOfrecidos = [servicio0,servicio1,servicio2,servicio3,servicio4, servicio5] ;


let mensajeServicios= "Estos son nuestros servicios \n"


servicioOfrecidos.forEach ( servicio => {
    mensajeServicios += ` ${servicio.id} - ${servicio.nombre} con un valor de ${servicio.precio} \n `

})

let opcionServicio=  parseInt (prompt (mensajeServicios))

const ServicioElegido = servicioOfrecidos.find (e => e.id === opcionServicio)

alert (`Te vas a llevar ${ServicioElegido.nombre} con un valor de $ ${ServicioElegido.precio}`)




 

//promociones

alert ("También podemos ofrecerte promociones, combinando diferentes servicios")

function Promociones (servicios, precio, sesiones,promo){
    this.servicios = servicios;
    this.precio= precio;
    this.sesiones =sesiones;
    this.promo= promo;

    this.mostrarServicio = function (){
    alert( "Promo" + this.promo +" incluye"+ "\n "+ this.servicios + "\n" + "Con un costo de $" + this.precio
    + "\n" + "y una totalidad de " + this.sesiones + " "+"sesiones"  ) }}

        const promo1 = new Promociones ("depilacion en axilas, ondas de choque y crema corporal natura", "4000", "2", "1");
        const promo2 = new Promociones ("depilacion uerpo entero, body up en cola", "6000", "3", "2");
        const promo3 = new Promociones ("cliolipolisis, radiofrecuencia", "8000", "4","3");


 promo1.mostrarServicio();
 promo2.mostrarServicio();
 promo3.mostrarServicio();








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
        alert ("Gracias por responder y ayudarnos a mejorar")
    }



    //lista de perfumes

    console.log (" Contamos con una amplia disponibilidad de fragancias")

    const fraganciasMujer = [

        {
            id:1,
            fragancia: "Atenas",
            precio: 1799,
            ml: 50
            
        },

        {
            id:2,
            fragancia: "Aromatizante Atenas",
            precio: 799,
            ml:125
            
        },

        {
            id:3,
            fragancia: "Mumbai",
            precio: 799 ,
            ml: 50
            
        },

        {
            id: 4,
            fragancia: "Praga",
            precio: 1799 ,
            ml: 50
            
        },
        {
            id: 5,
            fragancia: " New York",
            precio:1799 ,
            ml: 50
            
        },

        {
            id: 5,
            fragancia: " Positano",
            precio: 1799 ,
            ml: 50
            
        },

        {
            id: 6,
            fragancia: "Queens",
            precio: 1799,
            ml: 50
            
        },

        {
            id: 7,
            fragancia: "Rio",
            precio: 1799 ,
            ml: 50
            
        },

        {
            id: 8,
            fragancia: "Angers",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id: 9,
            fragancia: "Tokio Flower",
            precio: 2000,
            ml: 50
            
        },

        {
            id: 10,
            fragancia: " New York sexy",
            precio: 2000,
            ml:50
            
        },

        {
            id: 11,
            fragancia: " Reino",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id: 12,
            fragancia: "Mykonos",
            precio: 2000 ,
            ml:50
            
        },

        {
            id:13,
            fragancia: "Capri",
            precio: 2000,
            ml: 50
            
        },

        {
            id:14,
            fragancia: "Atrnas Intense",
            precio: 2000 ,
            ml:50
            
        },

        {
            id: 15,
            fragancia: "Praga Luna",
            precio: 2000,
            ml:50
            
        },

        {
            id: 16,
            fragancia: "Venecia",
            precio: 2000 ,
            ml: 50
            
        },
        {
            id: 17,
            fragancia: "Chicago",
            precio: 2000 ,
            ml: 50
            
        },
        {
            id: 18,
            fragancia: "Milan",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id: 19,
            fragancia: " Amsterdan",
            precio: 2000 ,
            ml: 50
            
        }



    ]
    console.log ("Las fragancias de Mujer son:")
    console.log ( fraganciasMujer)
     
    //fragancias economicas de mujer
    console.log ("Las fragancias economicas de mujer son:")
    const fraganciasMujerEconomicas = fraganciasMujer.filter((fraganciasMujer) => fraganciasMujer.precio <1000);
    
    console.log (fraganciasMujerEconomicas)

    //fragancias de hombre
    const fraganciasHombre = [

        {
            id:20,
            fragancia: "Manhattan",
            precio: 2000,
            ml:50
            
        },


        {
            id:21,
            fragancia: "Mangattan rose",
            precio: 2000,
            ml:50
            
        },

        {
            id: 22,
            fragancia: "Manhattan Party",
            precio: 2000,
            ml: 50
            
        },

        {
            id: 23,
            fragancia: "Santorini",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:24,
            fragancia: " Tokyo",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:25,
            fragancia: " Detroit",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:26,
            fragancia: " New York Homme",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:27,
            fragancia: " Monaco Red",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:28,
            fragancia: " Monaco red intenso",
            precio: 2000 ,
            ml: 50
            
        },

        {
            id:29,
            fragancia: " Monaco blue",
            precio: 2000 ,
            ml: 50
            
        }


    ]
    console.log ("Las fragancias de Hombre son:")
    console.log (fraganciasHombre);

    //solo se visualizan los nombres de las fragancias de hombre
    const fraganciasDeHombre= fraganciasHombre.reduce ((sumador,fraganciasHombre) => sumador + fraganciasHombre.fragancia);

    console.log ("Las fragancias de hombre son: " + fraganciasDeHombre)

    //Todos las fragancias: hombre y mujer

    const fraganciasUnidas = fraganciasHombre.concat(fraganciasMujer);
    console.log ( "Las fragancias de Bagues son")
    console.log (fraganciasUnidas)



    //saludo de agradecimiento

alert ("Gracias por confiar en Pilar-Tu Espacio Personal")  