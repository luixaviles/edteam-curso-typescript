export {}; // Modulo en TS
// ALIAS PARA TIPOS DE DATOS EN TS
let curso: string = 'TypeScript';
// Cursos codigo: JavaScript = 1, TypeScript = 2
// curso = 1; //JavaScript

let cursoNuevo: string | number;
// cursoNuevo = true;
cursoNuevo = 'JavaScript';
cursoNuevo = 2; // TypeScript

function getCurso() : string | number {
    // return 'JavaScript';
    return 1;
}

// Arreglos
let cursos: string[] = ['JavaScript', 'TypeScript'];
let cursos2: (string | number)[] = ['JavaScript', 'TypeScript', 1];

console.log('cursos', cursos);
console.log('cursos2', cursos2);

