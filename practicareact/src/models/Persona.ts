export interface Persona {
    id: number;
    nombres: string;
    apellidos: string;
    edad: number;
    ciudad: string;
    fecha_nacimiento: Date;
    tipo: number;
    materias_dictadas: Materias[];
    materias_inscritas: Materias[];
}

export interface Materias {
    id: number;
    nombre: string;
}
