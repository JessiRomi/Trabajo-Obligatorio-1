import Persona from "./Persona.js"; //Se importa la clase Persona

export default class Empleado extends Persona{   //La clase Empleado es una extension de la clase Persona
    //Atributos propios de la clase
    static #id = 0;   //id que se incrementa automaticamente al crearse un Empleado
    #ingreso; #despacho;

    //Método constructor
    constructor(nombre, apellido, dni, estadoCivil){
        Empleado.#id++;
        super(nombre, apellido, dni, estadoCivil);
        this.#ingreso = new Date(Date.now()).getFullYear();   //Toma el año en el que estamos
        this.#despacho = Empleado.#id;   //Se asigan a despacho el id que se genera automaticamente dentro de la clase
    }

    //--------------------Métodos Getter-------------------//

    get agnoDeIngreso(){
        return this.#ingreso;
    }

    get nroDeDespacho(){
        return this.#despacho;
    }

    //---------------------Método Setter-------------------//

    set nroDeDespacho(nuevoNroDeDespacho){   //Cambia el numero de despacho de un Empleado por uno nuevo
        this.#despacho = nuevoNroDeDespacho;
    }

    toString(){   //Retorna un string con los datos concatenados del Empleado
        return `${super.toString()}\n 
        Año De Ingreso: ${this.#ingreso}\n
        Número De Despacho: ${this.#despacho}\n`
    }

}