import { createBrowserRouter } from "react-router-dom";
import { ListPersonas } from "../pages/personas/ListPersonas";
import { FormPersonas } from "../pages/personas/FormPersonas";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ListPersonas />,
    },
    {
        path: "/personas/create",
        element: <FormPersonas />
    }
]);