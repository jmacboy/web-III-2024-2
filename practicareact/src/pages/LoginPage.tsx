import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { NavMenu } from "../components/NavMenu";
import { useAppDispatch } from "../hooks/reduxHooks";
import { loginUser } from "../slices/userSlice";
import { useState } from "react";
import { UserService } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    emailRequired: string,
    passwordRequired: string,
};

export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [errorText, setErrorText] = useState('')
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data);
        setErrorText('')
        new UserService().login(data.emailRequired, data.passwordRequired).then(() => {
            dispatch(loginUser(data.emailRequired));
            navigate('/personas');
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
                setErrorText("Error, usuario o contraseña incorrectas")
            }
        });
    }
    return (
        <div>
            <NavMenu />
            <div className="px-4 py-2">
                <Card color="transparent" shadow={false}>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-1 flex flex-col gap-3">
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
                                aria-invalid={errors.emailRequired ? "true" : "false"}
                                {...register("emailRequired", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                            />
                            {errors.emailRequired && <div className="text-red-600">Ingrese un email válido</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                size="lg"
                                type="password"
                                placeholder="*********"
                                aria-invalid={errors.passwordRequired ? "true" : "false"}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("passwordRequired", { required: true })}
                            />
                            {errors.passwordRequired && <span className="text-red-600">La contraseña es requerida</span>}
                            {errorText && <div
                                className="-mb-3 text-red-600 text-center">
                                {errorText}
                            </div>}
                            <Button type="submit">
                                Iniciar sesión
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}