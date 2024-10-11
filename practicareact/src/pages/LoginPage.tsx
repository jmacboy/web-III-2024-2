import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { NavMenu } from "../components/NavMenu";
import { useAppDispatch } from "../hooks/reduxHooks";
import { loginUser } from "../slices/userSlice";
import { useState } from "react";
import { UserService } from "../services/UserService";
import { setLocalStorage } from "../utils/LocalStorageUtils";
import { TOKEN_KEY, REFRESH_KEY } from "../utils/CONSTANTS";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const onLoginClick = () => {
        new UserService().login(email, password).then(() => {
            dispatch(loginUser(email));
            navigate('/personas');
        });
    }
    return (
        <div>
            <NavMenu />
            <div className="px-4 py-2">
                <Card color="transparent" shadow={false}>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                size="lg"
                                type="password"
                                placeholder="*********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />
                            <Button onClick={onLoginClick}>
                                Iniciar sesión
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}