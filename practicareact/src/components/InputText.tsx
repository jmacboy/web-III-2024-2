import { Input } from "@material-tailwind/react";


export const InputText = (props: any) => {
    return (
        <Input className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
                className: "before:content-none after:content-none",
            }}
            size="lg"
            {...props} />
    );
}