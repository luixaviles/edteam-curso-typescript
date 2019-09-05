export {};

class EscuelaDigital {
    // Atributos
    nombre: string;
    cursos: string[] = [];

    // Funcion que nos permite crear objetos
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarCurso(curso: string) {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso('JavaScript');
escuela.agregarCurso('TypeScript');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);