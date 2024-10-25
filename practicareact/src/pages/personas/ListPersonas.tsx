import { useEffect, useState } from "react";
import { Persona } from "../../models/Persona";
import { PersonaService } from "../../services/PersonasService";
import { NavMenu } from "../../components/NavMenu";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Paginador } from "../../components/Paginador";

export const ListPersonas = () => {
    const navigate = useNavigate();
    const [personas, setPersonas] = useState<Persona[]>([]);
    // const { userEmail } = useAuth({ redirectWithoutToken: true });
    const [cantPaginas, setCantPaginas] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (!currentPage) {
            return;
        }
        getPersonaList();
    }, [currentPage])

    const getPersonaList = () => {
        new PersonaService().getPersonaList(currentPage)
            .then((response) => {
                setPersonas(response.results);
                setCantPaginas(Math.ceil(response.count / 5));
            });
    }
    const onEditarclick = (persona: Persona) => {
        navigate('/personas/' + persona.id)
    }
    const onEliminarClick = (persona: Persona) => {
        const confirmation = confirm('Está seguro que desea eliminar?');
        if (!confirmation) {
            return;
        }
        new PersonaService().deletePersona(persona.id?.toString() ?? "0")
            .then(() => {
                getPersonaList();
            });
    }
    return (
        <div>
            <NavMenu />

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
                            <td>{moment(persona.fecha_nacimiento).format('DD/MM/YYYY')}</td>
                            <td><Button onClick={() => {
                                onEditarclick(persona)
                            }}>Editar</Button></td>
                            <td><Button onClick={() => {
                                onEliminarClick(persona)
                            }}>Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginador page={currentPage} setPage={setCurrentPage} cantPaginas={cantPaginas} />
        </div>
    );
}