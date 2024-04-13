export default class Persona{ //Es una clase abstracta, ya que en el Centro Educativo no habra una Persona como tal
    //Atributos de la clase
    #nombre; #apellido; dni; #estadoCivil;

    //Metodo constructor
    constructor(nombre,apellido,dni,estadoCivil){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.dni = dni;
        this.#estadoCivil = estadoCivil;
    }

    //--------------------Metodos Getter-------------------//

    get nombre(){
        return this.#nombre;
    }

    get apellido(){
        return this.#apellido;
    }

    get dni(){
        return this.dni;
    }

    get estadoCivil(){
        return this.#estadoCivil;
    }

    //----------------------Metodos Setter-----------------//

    set estadoCivil(nuevoEstadoCivil){ //Cambia el estado civil de la persona
        this.#estadoCivil = nuevoEstadoCivil;
    }

    toString(){   //Retorna un string con los datos de la Persona concatenados
        return `Nombre: ${this.#nombre}\n
        Apellido: ${this.#apellido}\n
        DNI: ${this.dni}\n
        Estado Civil: ${this.#estadoCivil}\n`
    }
    
}