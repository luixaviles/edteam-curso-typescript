// Tipos Primitivos o Tipos Basicos
// Boolean
let estaConectado = true;
let estaInscrito: boolean;
estaInscrito = false;
estaInscrito = true;
// estaInscrito = 2; NO es valido

function tieneDescuento(curso) {
    if(curso === 'typescript')
        return true;
    return false;
}

console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));

// Number
let estudiantes = 100;
// estudiantes = '100'; // Invalido
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso): number {
    if(curso === 'typescript')
        return 100;
    return 0;
}

let inscritosCursoTypescript: number = 100;

// Type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

// Type: Number, binario
let binario: number = 0b1010;
console.log('binario', binario);

// Type: Number, octal
let octal: number = 0o755;
console.log('octal', octal);

// String
let nombre = 'Luis';
let apellido: string = 'Aviles';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);

// String + ES6 Template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto2', nombreCompleto2);
let arregloCursos = ['TypeScript', 'Angular'];
let mensaje = `
Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
¡Gracias por asistir!
`;
console.log('mensaje', mensaje);


// Tipos Especiales en TypeScript
// Tipo: Any
let desconocido; // Seria como: var desconocido;
desconocido = 'hola';
desconocido = 2;
let desconocido2: any = 2;

// Tipo: Void
let vacio: void;
function mostrarContenido(curso: string): void {
    const mensaje = curso? `Bienvenido al curso ${curso}`: 'Suscribete al curso!';
    console.log('mensaje', mensaje);
}

mostrarContenido('typescript');

// Tipo: Never
let nunca: never;

function retornaError(error: string): never {
    throw new Error('Error TypeScript. ' + error);
    // Nunca retorna un valor!
}

// retornaError('Valor inesperado');

function cicloInfinito(): never {
    while(true) {
    }
}
 
// Tipo: Null y Undefined

let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null {
    return null;
}

function retornoUndefined(): undefined {
    return undefined;
}

let variableSinValor = undefined;
console.log('variableSinValor', variableSinValor);

// Funciones en TypeScript

function saludo(nombre?: string): string {
    if(nombre)
        return 'Hola ' + nombre;
    return '¡Hola!'
}

console.log(saludo(nombreCompleto));
console.log(saludo());

// Arreglos en TypeScript
let cursos: string[];
cursos = ['TypeScript', 'Angular'];

// Arreglos con Generics
let nombres: Array<string>;
nombres = ['Luis Aviles', 'Alvaro Felipe'];

let arreglo: any[] = [2, 'cadena', true]; // Evitar any

// Tuplas
let infoCursos: [string, number] = ['typescript', 100];
infoCursos = ['angular', 200];

let curso: [string, number, string] = ['typeScript', 150, '08/2019'];
console.log('curso', curso);
let nuevosInscritos = 10;

console.log('fecha de inicio', (curso[2]));
console.log('Total Inscritos', curso[1] + nuevosInscritos);

let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);




