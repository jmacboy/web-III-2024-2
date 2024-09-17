import { useEffect, useState } from "react";
import { Persona } from "../../models/Persona";
import { PersonaService } from "../../services/PersonasService";

export const ListPersonas = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    useEffect(() => {
        new PersonaService().getPersonaList()
            .then((response) => {
                setPersonas(response);
            });
    }, [])

    return (
        <div>
            <h1>Listado de Personas</h1>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Ciudad</th>
                        <th>Fecha de Nacimiento</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td>{persona.id}</td>
                            <td>{persona.nombres}</td>
                            <td>{persona.apellidos}</td>
                            <td>{persona.edad}</td>
                            <td>{persona.ciudad}</td>
                            <td>{persona.fecha_nacimiento.toString()}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}