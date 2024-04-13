export default class CentroEducativo{   //Clase CentroEducativo
    //Atributo de la clase
    personas

    //Metodo constructor
    constructor(){
        this.personas = [];   //Se crea un arreglo vacio
    }

    //----------------Metodos de la Clase------------------//

    darDeAlta(persona){   //Para dar el alta, verifica si existe una persona con el mismo DNI
        let indice = this.personas.findIndex(valor => valor.dni === persona.dni);
        if (indice == -1){   //Si es -1, quiere decir que no existe una persona con ese DNI
            this.personas.push(persona);   //Se agrega, a la persona pasada como parametro, al arreglo de personas
            alert(`La persona fue agregada con exito`)
        }
        else{
            alert(`Ya existe una persona con ese DNI`)   //No se agrega la persona ya que se encontro otra con el mismo DNI
        }
    }

   
    darDeBaja(dni){   //Se ingresa el numero de DNI para ver si la persona existe en el arreglo de personas
        let indice = this.personas.findIndex(valor => valor.dni === dni);
        if (indice !== -1){   //Si es distinto de -1, quiere decir que lo encontro
            this.personas.splice(indice,1);   //Se saca del arreglo el elemento cuya posicion la da el indice
            alert(`La persona fue eliminada`)
        }
        else{
            alert(`El DNI ${dni} no se encontro`)   //Si no existe una persona con ese DNI
        }
    }

}
