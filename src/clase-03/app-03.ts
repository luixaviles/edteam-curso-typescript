export {};

// ASERCIONES DE TIPO EN TYPESCRIPT | Type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso', numeroCurso);

let estudiante: {nombre?: string, curso?: string} = {};
estudiante.nombre = 'Jorge';
estudiante.curso = 'JavaScript';
console.log('estudiante', estudiante);

type Estudiante = {nombre: string, curso: string};
let estudiante2 = <Estudiante>{};
estudiante2.nombre = 'Roberto';
estudiante2.curso = 'TypeScript';

let estudiante3 = `{"nombre": "Juan", "curso": "JavaScript"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3);

console.log('estudiante', objetoEstudiante);


