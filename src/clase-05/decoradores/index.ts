// DECORADORES
export {Entidad, enumerable, readonly};

function Entidad(config: any) {
    console.log('Entidad', config);
    return function(target: any) {
        // Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    }
}

function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

function readonly(target: any, name: any, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
    return descriptor;
}
