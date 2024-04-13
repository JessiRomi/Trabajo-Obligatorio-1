//Se importan las clases de los otros archivos

import Estudiante from "./Estudiante.js";
import Profesor from "./Profesor.js";
import PersonalServicio from './PersonalServicio.js'
import CentroEducativo from "./CentroEducativo.js";


let centro = new CentroEducativo();   //Se crea un centro educativo


//Se dan algunas altas para que el centro ya tenga datos cargados
centro.darDeAlta(new Profesor("Jessica","Conejero","34545869","soltero","Matematica"));
centro.darDeAlta(new Profesor("Jeremias","Fuentes","54564666","casado","Ingles"));
centro.darDeAlta(new Profesor("Pepe","Bueno","14665556","viudo","Informatica"));
centro.darDeAlta(new Estudiante("Carlos","Perez","59875454","soltero","1ro 2da"));
centro.darDeAlta(new Estudiante("Juan","Lopez","45666224","soltero","5to 1ra"));
centro.darDeAlta(new PersonalServicio("Aurora","Vaca","45222258","casado","Maestranza"));
centro.darDeAlta(new PersonalServicio("Chichita","Caceres","54545566","viudo","Preceptoria"));


//Se toman los elementos del index.html
const btn_alta =  document.getElementById("darAlta");
const formularioAlta = document.getElementById("alta");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const dni = document.getElementById("dni");
const estadoCivil = document.getElementById("estado_civil");
const rol = document.getElementById("rol");
const btnAceptar = document.getElementById("aceptar");
const departamento = document.getElementById("departamento");
const seccion = document.getElementById("seccion");
const curso = document.getElementById("curso");
const btn_baja= document.getElementById("darBaja");
const btn_imprimir = document.getElementById("imprimir");


//Se "ve" el cambio en el rol que esta en el formulario, dependiendo el rol se cambia al campo exclusivo de la clase
rol.addEventListener("change",()=>{
    if(rol.value === "Profesor"){
        seccion.setAttribute("hidden","true");   //Le da el atributo hidden(oculto) a la seccion
        curso.setAttribute("hidden","true");   //Le da el atributo hidden al curso
        departamento.removeAttribute("hidden");   //Le saca el atributo hidden al departamento, que lo necesita el Profesor
    }
    else if(rol.value === "Estudiante"){  
        seccion.setAttribute("hidden","true");   //Oculta la seccion
        departamento.setAttribute("hidden","true");   //Oculta el departamento
        curso.removeAttribute("hidden");   //Le da visibilidad al curso
    }
    else if(rol.value === "PersonalServicio"){
        departamento.setAttribute("hidden","true");   //Oculta el departamento
        curso.setAttribute("hidden","true");   //Oculta el curso
        seccion.removeAttribute("hidden");   //Le da visibilidad a la seccion
    }
})


//Se da el click al boton aceptar del formulario, que se tomo en el btnAceptar
btnAceptar.addEventListener("click",(event)=>{   
    event.preventDefault();
    if(nombre.value !== "" && apellido.value !== "" && dni.value !== "" && estadoCivil.value !== "" && rol.value !== ""){//Si todos los campos estan completos
        if(rol.value === "Profesor"){   //Se pregunta si el rol es el de Profesor
            if(departamento.value !== ""){   //Si el departamento contiene un valor, se crea al Profesor
                centro.darDeAlta(new Profesor(nombre.value,apellido.value,dni.value,estadoCivil.value,departamento.value))
            }
        }
        else if(rol.value === "Estudiante"){   //Se pregunta si el rol es el de un Estudiante
            if(curso.value !== ""){   //Si el curso es distinto de vacio, se crea el Estudiante
                centro.darDeAlta(new Estudiante(nombre.value,apellido.value,dni.value,estadoCivil.value,curso.value))
            }
        }
        else if(rol.value === "PersonalServicio"){   //Se pregunta si el rol es de PersonalServicio
            if(seccion.value !== ""){   //Si la seccion tiene un valor, se crea al nuevo PersonalServicio
                centro.darDeAlta(new PersonalServicio(nombre.value,apellido.value,dni.value,estadoCivil.value,seccion.value))
            }
        }
    }
    else{   //Si algun campo esta vacio
        alert(`Debe completar todos los campos`)
    }
    formularioAlta.style.visibility = "hidden";   //Deshabilita el formulario de alta de persona, desde el CSS
    formularioAlta.reset();
})


//Se da el click al boton Dar de Alta del formulario, que se tomo en el btn_alta
btn_alta.addEventListener("click",()=>{
    formularioAlta.style.visibility = "visible";   //Se hace visible el formulario para dar de alta a una persona
})


//Se da el click al boton Dar de Baja del formulario, que se tomo en el btn_baja
btn_baja.addEventListener("click",()=>{
    var idBaja = prompt("Ingrese el DNI de la Persona que desea dar de baja");   //Se pide al usuario que ingrese el dni al que le quiere dar de baja
    centro.darDeBaja(idBaja);   //Se llama a la funcion darDeBaja con el dni ingresado
})


//Funcion que imprime desde un arreglo segun el tipo que se le envie, por consola!!
function imprimir(arreglo,tipo){
    switch(tipo){
        case 1: 
            alert (`Se listaran todas las personas`);
            arreglo.personas.forEach(persona =>{   //Recorre el arreglo e imprime todas las personas
                if(persona instanceof Estudiante){
                    console.log(persona.toString());
                    console.log(`-----------------------`)
                }
                else if (persona instanceof Profesor){
                    console.log(persona.toString());
                    console.log(`-----------------------`)
                }
                else if(persona instanceof PersonalServicio){
                    console.log(persona.toString());
                    console.log(`-----------------------`)
                }
            });
            break;
        case 2: 
            alert (`Se listaran todos los estudiantes`);
            arreglo.personas.forEach(persona =>{   //Recorre el arreglo e imprime solo a los estudiantes
                if(persona instanceof Estudiante){
                    console.log(persona.toString());
                    console.log(`-----------------------`)
                }
            });
            break;
        case 3: 
            alert (`Se listaran todos los Profesores`);
            arreglo.personas.forEach(persona =>{   //Recorre el arreglo e imprime solo a los Profesores
                if(persona instanceof Profesor){
                    console.log(persona.toString());
                    console.log(`-----------------------`)
                }
            });
            break;
        case 4:
            alert (`Se listaran todos los integrantes del Personal de Servicio`);
            arreglo.personas.forEach(persona =>{   //Recorre el arreglo e imprime solo al PersonalServicio
            if(persona instanceof PersonalServicio){
                console.log(persona.toString());
                console.log(`-----------------------`)
            }
        });
            break;
        default: alert(`Ingreso un numero incorrecto`)   //Si tipo es otro numero indica que es incorrecto
    }
}


//Se da el click al boton Imprimir Informacion del index.html, que se tomo en el btn_imprimir
btn_imprimir.addEventListener("click",()=>{
    //Se pide que se ingrese un numero de acuerdo a lo que se desea imprimir
    var tipo = prompt("Ingrese una opcion para imprimir:\n1-Todos\n 2-Estudiantes\n 3-Profesores\n 4-Personal de servicio");
    tipo = parseInt(tipo);
    imprimir(centro,tipo);   //Llamo a la funcion imprimir con el arreglo que cree y el tipo que ingreso el usuario
})