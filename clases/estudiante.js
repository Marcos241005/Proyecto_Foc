const { estudiantes } = require("../bd/estudiantes")

class Estudiante{

    constructor(){
        this.estudiantes=estudiantes
    }
    agregar = (estudiante={id:0,nombre:"",apellido:"",sexo:""})=>{
        this.estudiantes.push(estudiante);//agrega bun elemento en js en elarreglo
    }

    consultarUno = (id)=>{//devuelve un estudiante
        return this.estudiantes.find((elemento)=>{
            if(elemento.id==id){
                return true
            }
        });
    }
    consultarTodos = ()=>{//lista de estudiantes
        return this.estudiantes;
    }
    actualizar = (id,estudiante={id:0,nombre:"",apellido:"",sexo:""})=>{
        //necesita el index
        let i = this.estudiantes.findIndex((elemento)=>{
            if(elemento.id==id){
                return true
            }
        })
        this.estudiantes[i]=estudiante;
        return this.estudiantes;
    }
    eliminar = (id)=>{
        //necesita el index
        let i = this.estudiantes.findIndex((elemento)=>{
            if(elemento.id==id){
                return true
            }
        })
        const eliminado=this.estudiantes.splice(i,1);
        console.log("elemento eliminado: ", eliminado)
        return this.estudiantes;
    }
    //funciones de flecha
    total =()=>{//cantidad de estudiantes
        return this.estudiantes.length;
    }
}

module.exports={
    Estudiante
}