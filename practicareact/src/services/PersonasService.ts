import axios from "axios";
import { Persona } from "../models/Persona";

export class PersonaService {
    getPersonaList() {
        return new Promise<Persona[]>((resolve, reject) => {
            axios.get('http://localhost:8000/api/personas/')
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

}