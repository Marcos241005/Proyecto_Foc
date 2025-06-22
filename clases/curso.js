const { cursos } = require("../bd/cursos");

class Curso{

    constructor() {
        this.cursos = cursos;
    }

    agregarCurso = (cursos = { id: 0, titulo: "",horas:0}) => {
        this.cursos.push(cursos);
    }

    consultarCurso = (id) => {//devuelve un curso
        return this.cursos.find((elemento) => {
            if (elemento.id == id) {
                return true
            }
        });
    }
    consultarCursos = () => {//lista de cursos
        return this.cursos;
    }
    actualizarCurso = (id, cursos = { id: 0, titulo: "",horas:0}) => {
        //necesita el index
        let i = this.cursos.findIndex((elemento) => {
            if (elemento.id == id) {
                return true
            }
        })
        this.cursos[i] = cursos;
        return this.cursos;
    }
    eliminarCurso = (id) => {
        //necesita el index
        let i = this.cursos.findIndex((elemento) => {
            if (elemento.id == id) {
                return true
            }
        })
        const eliminado = this.cursos.splice(i, 1);
        console.log("Curso eliminado: ", eliminado)
        return this.cursos;
    }
    //funciones de flecha
    totalCurso = () => {//cantidad de cursos
        return this.cursos.length;
    }
}
module.exports={
    Curso
}