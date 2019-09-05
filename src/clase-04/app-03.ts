export {};
// MIEMBROS PRIVADO

class Curso {
    constructor(private id: number, private nombre: string) {}
}

class EscuelaDigital {
    // Atributos
    private cursos: Curso[] = [];

    // Funcion que nos permite crear objetos
    constructor(private nombre: string) {}

    public agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('EDteam');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
// cursoJS.nombre = 'JavaScript desde Cero';
// cursoJS.id = 20;
console.log('escuela', escuela);
// console.log('escuela.nombre', escuela.nombre); //nombre es privado