import { Persona } from "./Persona";

export interface PersonaPage {
    count: number;
    next?: string;
    previous?: string;
    results: Persona[];
}

