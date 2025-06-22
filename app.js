const colors = require('colors');
const { Calculadora } = require("./clases/calculadora");
const { Universidad } = require("./clases/universidad");
const { Pokemon } = require("./clases/pokemon");
const { cursos } = require('./bd/cursos');
const { Curso } = require('./clases/curso');

// --- BLOQUE 1: Operaciones matemáticas y manejo de arreglos ---
console.log("=== BLOQUE MATEMÁTICO ===".green);
let name = "eduardo";
let apellido = "montes";
const edad = 50;
let sueldo = 50.5;
let carreras = {
    tsu: "informatica",
    ing: "informatica",
    lcd: "matematicas"
};

if (edad >= 50) {
    apellido = "z";
    console.log("Deberías jubilarte: ", apellido);
} else if (edad >= 30 && edad < 50) {
    console.log(`Vas por buen camino, llevas tres carreras las cuales son: ${carreras.tsu} ${carreras.ing}`);
} else {
    console.log('Estudia más, estudia matemáticas para ser mejor en IA');
}
console.log("Este es mi apellido: ", apellido);

// Instancia del objeto Calculadora
const calculadora = new Calculadora();
console.log("Suma de dos números: ", calculadora.suma(5, 7));
console.log("Resta de dos números: ", calculadora.resta(5, 7));
const { a, b, resultado } = calculadora.multiplicacion(5, 7);
console.log(`Las propiedades de la aplicación son: ${a} ${b}, y su resultado es: ${resultado}`);

// Arreglos y operaciones
console.log("Logs de operaciones".blue);
console.log(calculadora.getResultados());

// Método find
console.log("Buscando un elemento".red);
let lista = calculadora.getResultados();
let busqueda = lista.find((x) => x.id == 4);
console.log(busqueda);

// Búsqueda del índice
let indice = lista.findIndex((x) => x.id == 4);
console.log("Índice de la búsqueda: ", indice);

// Actualizar datos
lista[indice] = {
    id: 4,
    operacion: "division",
    valora: 5,
    valorb: 7,
    resultado: 5 / 7,
};
console.log("Lista actualizada: ", lista);

// Eliminar datos
let eliminado = lista.splice(0, 2);
console.log("Eliminado: ", eliminado);
console.log("Nueva lista: ", lista);

// Reestructurar arreglo
let newlist = lista.map((x) => ({ id: x.id, op: x.operacion }));
console.log("Nueva lista estructurada: ", newlist);

// Instancia de Pokemon y consumo de API
console.log("Consumo de API REST");
const poke = new Pokemon();
poke.getPokemonByName('pichu')

// --- BLOQUE 2: Gestión de estudiantes en la universidad ---
console.log("\n=== BLOQUE UNIVERSIDAD ===".yellow);
var nombre = "Marcos";
let apellido2 = "Castellanos";
let edad2 = -18;
const pi = 3.14;

if (edad2 > 18) {
    let nombre = "Dario";
    console.log("La persona: ", nombre, "es mayor de edad");
} else if (edad2 >= 0 && edad2 < 19) {
    console.log("La persona es menor de edad");
} else {
    console.log("La persona no tiene edad lógica".red);
}

// Instancia de Universidad
let universidad = new Universidad();
console.log("Estudiantes en la universidad: ", universidad.totalEstudiantes());

// Agregar un estudiante
let datos_agregar = {
    id: 1,
    nombre: "Samuel",
    apellido: "Rosales",
    sexo: "masculino"
};
universidad.registrarEstudiante(datos_agregar);

// Consultar un estudiante
console.log("Consultar un estudiante: ", universidad.consultarEstudiante(0));

// Consultar estudiantes
console.log("Lista de estudiantes: ", universidad.consultarEstudiantes());

// Actualizar estudiante
let datos_actualizar = {
    id: 0,
    nombre: "Dario",
    apellido: "Montero",
    sexo: "masculino"
};
console.log("Lista de estudiantes actualizada: ", universidad.actualizarEstudiante(datos_actualizar));

// Eliminar un estudiante
console.log("Lista de estudiantes actualizada con eliminación:");
let datos_eliminar = { id: 1 };
console.log(universidad.eliminarEstudiante(datos_eliminar));

// -- Bloque 3: Gestion de cursos --
console.log("\n== BLOQUE CURSOS ==".rainbow);
let curso = new Curso();
console.log("Cursos totales ".red, universidad.total_cursos);

let cursos_agregar = {
    id: 1,
    titulo: "Secreto en la montaña",
    horas: 0
};
universidad.registrarCurso(cursos_agregar);

//consultar un curso
console.log("Consultar un curso: ".blue, universidad.consultarCurso(0));

//consultar cursos
console.log("Consultar los cursos".blue, universidad.consultarCursos());

//actualizar cursos
let cursos_actualizar ={
    id: 0,
    titulo: "Js con frameworks",
    horas: 0
};
console.log("Lista actualizada de cursos: ".yellow,universidad.actializarCurso(cursos_actualizar));

//eliminar cursos
console.log("Lista de cursos actualizada con eliminacion: ".yellow);
let cursos_eliminar = { id: 1 }
console.log(universidad.eliminarCurso(cursos_eliminar));

// Consumo de API con async/await
const poke2 = new Pokemon();//otra instancia de Pokemon pero se llama poke2
poke2.getPokemonByName('pikachu');
/** TAREA */
// falta la logica del curso, pero ya tenemos la logica del estudiante