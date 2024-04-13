import Empleado from "./Empleado.js";   //Importa la clase Empleado

export default class PersonalServicio extends Empleado{   //La clase PersonalServicio es una extension de la clase Empleado
    //Atributo de la clase PersonalServicio
    #seccion;

    //Método constructor
    constructor(nombre, apellido, dni, estadoCivil, seccion){
        super(nombre, apellido, dni, estadoCivil);
        this.#seccion = seccion;
    }

    //-------------------Métodos Getter--------------------//

    get seccion(){
        return this.#seccion;
    }

    //-------------------Método Setter---------------------//

    set seccion(nuevaSeccion){   //Cambia la seccion del PersonalServicio
        this.#seccion = nuevaSeccion;
    }

    toString(){   //Retorna un string con los datos del PersonalServicio
        return `${super.toString()}\n
        Sección: ${this.#seccion}\n`
    }
    
}