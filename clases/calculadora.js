const { resultados } = require("../bd/resultados");
class Calculadora {
    constructor() {
        this.resultados = resultados;
    }
    suma = (a, b) => {//funcion de flecha
        let resultado = {
            id: this.resultados.length + 1,
            operacion: "suma",
            valora: a,
            valorb: b,
            resultado: a + b
        }
        this.resultados.push(resultado)
        return a + b;
    }
    resta(a, b) {//tradicional
        let resultado = {
            id: this.resultados.length + 1,
            operacion: "resta",
            valora: a,
            valorb: b,
            resultado: a - b
        }
        this.resultados.push(resultado)
        return a - b
    }
    multiplicacion = (a, b) => {
        let resultado = {
            id: this.resultados.length + 1,
            operacion: "multiplicacion",
            valora: a,
            valorb: b,
            resultado: a * b
        }
        this.resultados.push(resultado)
        return {
            a,
            b,
            resultado: a * b
        }
    }
    getResultados =()=>{
        return this.resultados;
    }
}
//deben exportar la clase
module.exports = {
    Calculadora
}