import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavMenu } from "../../components/NavMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useEffect, useState } from "react";
import { PersonaService } from "../../services/PersonasService";
import { Persona } from "../../models/Persona";
import moment from "moment";
import { Button, Card, Input, Typography, Select, Option } from "@material-tailwind/react";

type Inputs = {
    nombresRequired: string,
    apellidosRequired: string,
    edadRequired: string,
    ciudadRequired: string,
    fechaNacimientoRequired: string,
    tipoRequired: string,
};

export const FormPersonas = () => {

    const { id } = useParams();

    const { control, register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>();
    const navigate = useNavigate();
    useEffect(() => {
        if (!id) return;
        const loadPersona = () => {
            new PersonaService().getPersonaById(id)
                .then(res => {
                    setValue("nombresRequired", res.nombres);
                    setValue("apellidosRequired", res.apellidos);
                    setValue("ciudadRequired", res.apellidos);
                    setValue("edadRequired", res.edad.toString());
                    setValue("fechaNacimientoRequired", res.fecha_nacimiento);
                    setValue("tipoRequired", res.tipo.toString())
                })
        }
        loadPersona();
    }, [id])



    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(data);
        const persona: Persona = {
            nombres: data.nombresRequired,
            apellidos: data.apellidosRequired,
            edad: parseInt(data.edadRequired),
            fecha_nacimiento: moment(data.fechaNacimientoRequired).format('YYYY-MM-DD'),
            tipo: parseInt(data.tipoRequired),
            ciudad: data.ciudadRequired
        }
        if (id) {
            doUpdate(persona);
        } else {
            doInsert(persona);
        }
    }
    const doUpdate = (persona: Persona) => {
        persona.id = parseInt(id ?? "0");
        new PersonaService().updatePersona(persona).then(() => {
            navigate('/personas');
        });
    }
    const doInsert = (persona: Persona) => {
        new PersonaService().insertPersona(persona).then(() => {
            navigate('/personas');
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
                                Nombres
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Juancito"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                aria-invalid={errors.nombresRequired ? "true" : "false"}
                                {...register("nombresRequired", { required: true })}
                            />
                            {errors.nombresRequired && <div className="text-red-600">Ingrese un nombre válido</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Apellidos
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Perez"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                aria-invalid={errors.apellidosRequired ? "true" : "false"}
                                {...register("apellidosRequired", { required: true })}
                            />
                            {errors.apellidosRequired && <div className="text-red-600">Ingrese un apellido válido</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Edad
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="12"
                                type="number"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                aria-invalid={errors.edadRequired ? "true" : "false"}
                                {...register("edadRequired", { required: true })}
                            />
                            {errors.edadRequired && <div className="text-red-600">Ingrese una edad válida</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Fecha de Nacimiento
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="01-01-2020"
                                type="date"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                aria-invalid={errors.fechaNacimientoRequired ? "true" : "false"}
                                {...register("fechaNacimientoRequired", { required: true })}
                            />
                            {errors.fechaNacimientoRequired && <div className="text-red-600">Ingrese una fecha válida</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Ciudad
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Santa Cruz"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                aria-invalid={errors.ciudadRequired ? "true" : "false"}
                                {...register("ciudadRequired", { required: true })}
                            />
                            {errors.ciudadRequired && <div className="text-red-600">Ingrese una ciudad válida</div>}
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Tipo
                            </Typography>
                            <Controller
                                name="tipoRequired"
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        aria-invalid={errors.tipoRequired ? "true" : "false"}
                                        variant="outlined" label="Seleccione un tipo"
                                    >
                                        <Option value="1">Estudiante</Option>
                                        <Option value="2">Docente</Option>
                                    </Select>)}
                            />


                            {errors.tipoRequired && <div className="text-red-600">Seleccione un tipo válido</div>}
                            <Button type="submit">
                                Guardar datos
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div >
    );
}