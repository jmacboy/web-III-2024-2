import { createBrowserRouter } from "react-router-dom";
import { ListPersonas } from "../pages/personas/ListPersonas";
import { FormPersonas } from "../pages/personas/FormPersonas";
import { OrderPage } from "../pages/OrderPage";
import { CounterPage } from "../pages/Counterpage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage />,
    },
    {
        path: "/personas",
        element: <ListPersonas />,
    },
    {
        path: "/personas/create",
        element: <FormPersonas />
    },
    {
        path: "/orden",
        element: <OrderPage />
    },
    {
        path: '/counter',
        element: <CounterPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: "/personas/:id",
        element: <FormPersonas />
    }
]);