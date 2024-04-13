import Persona from "./Persona.js";   //Se importa la clase Persona

export default class Estudiante extends Persona{   //La clase Estudiante es una extension de la clase Persona
    //Atributo propio de la clase
    #cursoMatriculado

    //Metodo constructor
    constructor(nombre, apellido, dni, estadoCivil, cursoMatriculado){
        super(nombre, apellido, dni, estadoCivil);
        this.#cursoMatriculado = cursoMatriculado;
    }

    //-----------------Metodo Getter-----------------------//

    get cursoMatriculado(){
        return this.#cursoMatriculado;
    }

    //-----------------Metodos Setter----------------------//

    set cursoMatriculado(nuevoCurso){   //Cambia el curso en el que esta matriculado un Estudiante por el nuevoCurso
        this.#cursoMatriculado = nuevoCurso;
    }

    toString(){   //Retorna un string con los datos del Estudiante
        return `${super.toString()}\n
        Curso Matriculado: ${this.#cursoMatriculado}\n`
    }
    
}