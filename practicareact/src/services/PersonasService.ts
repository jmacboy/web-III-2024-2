import { Persona } from "../models/Persona";
import apiClient from "./interceptor";

export class PersonaService {
    getPersonaList() {
        return new Promise<Persona[]>((resolve, reject) => {
            apiClient.get('/personas/')
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }
    insertPersona(persona: Persona) {
        return new Promise<Persona>((resolve, reject) => {
            apiClient.post('/personas/', persona)
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

}