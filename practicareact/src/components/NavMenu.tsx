import { Button, Menu, MenuHandler, MenuItem, MenuList, Navbar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const NavMenu = () => {
    const navigate = useNavigate();
    const { logout, userEmail } = useAuth({ redirectWithoutToken: false });
    const onLogoutClick = () => {
        logout();
    }
    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
            <div className="container mx-auto flex justify-end text-blue-gray-900">
                {userEmail ? (<div>{userEmail}
                    <Button onClick={onLogoutClick} variant="text" size="sm" className="lg:inline-block">
                        <span>Cerrar sesión</span>
                    </Button>
                    <Menu>
                        <MenuHandler>
                            <Button>Personas</Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem onClick={() => {
                                navigate("/personas");
                            }}>Lista de Personas</MenuItem>
                            <MenuItem onClick={() => {

                                navigate("/personas/create");
                            }}>Crear Persona</MenuItem>
                        </MenuList>
                    </Menu>
                </div>) : (<div>
                    <Button onClick={() => {
                        navigate("/login");
                    }} variant="text" size="sm" className="lg:inline-block">
                        <span>Log In</span>
                    </Button>
                </div>)}

                <Menu>
                    <MenuHandler>
                        <Button>Materias</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Lista de Materias</MenuItem>
                        <MenuItem>Crear Materia</MenuItem>
                    </MenuList>
                </Menu>
                <Button onClick={() => {
                    navigate("/counter");
                }} variant="text" size="sm" className="lg:inline-block">
                    <span>Contador</span>
                </Button>
                <Button onClick={() => {
                    navigate("/orden");
                }} variant="text" size="sm" className="lg:inline-block">
                    <span>Orden</span>
                </Button>
            </div>
        </Navbar>
    );
}