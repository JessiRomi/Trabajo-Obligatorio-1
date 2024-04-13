import Empleado from "./Empleado.js";   //Se importa la clase Empleado

export default class Profesor extends Empleado{   //La clase Profesor es una extension de la clase Empleado
    //Atributo propio de la clase Empleado
    #departamento;

    //Método constructor
    constructor(nombre, apellido, dni, estadoCivil, departamento){
        super(nombre, apellido, dni, estadoCivil);
        this.#departamento = departamento;
    }

    //----------------------Métodos Getter-----------------//

    get departamento(){
        return this.#departamento;
    }

    //----------------------Método Setter------------------//

    set departamento(nuevoDepartamento){   //Asigna un nuevo departamento al Profesor
        this.#departamento = nuevoDepartamento;
    }

    toString(){   //Retorna un string con los datos concatenados del Profesor
        return `${super.toString()}\n
        Departamento: ${this.#departamento}\n`
    }
    
}