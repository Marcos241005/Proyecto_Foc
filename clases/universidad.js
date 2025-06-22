const { Curso } = require("./curso");
const { Estudiante } = require("./estudiante");


class Universidad{

    
    
    constructor(){
        //esto es una instancia de la clase estudiante
        this.estudiante= new Estudiante();
        //hacemos una instancia de cursos
        this.curso= new Curso();
    }


    //logica del estudiante
    registrarEstudiante=(estudiante)=>{
        return this.estudiante.agregar(estudiante);
    }
    actualizarEstudiante=(estudiante)=>{
        return this.estudiante.actualizar(estudiante.id,estudiante);
    }
    eliminarEstudiante=(estudiante)=>{
        return this.estudiante.eliminar(estudiante.id);
    }
    consultarEstudiante=(estudiante)=>{
        return this.estudiante.consultarUno(estudiante.id);
    }
    
    consultarEstudiantes=()=>{
        return this.estudiante.consultarTodos();
    }

    //hacerla logica de cursos

    // hacer los reportes
    totalEstudiantes =()=>{//cantidad de estudiantes  registrados en la universidad
        return this.estudiante.total();
    }
    //funciones de flecha
    total_cursos =()=>{//cantidad de cursos
        return this.cursos.length;
    }
    registrarCurso =(curso)=>{
        return this.curso.agregarCurso(curso);
    }
    actializarCurso =(curso)=>{
        return this.curso.actualizarCurso(curso.id,curso);
    }
    eliminarCurso =(curso)=>{
        return this.curso.eliminarCurso(curso.id);
    }
    consultarCurso =(curso)=>{
        return this.curso.consultarCurso(curso.id);
    }
    consultarCursos =(curso)=>{
        return this.curso.consultarCursos();
    }

}
module.exports={
    Universidad
}