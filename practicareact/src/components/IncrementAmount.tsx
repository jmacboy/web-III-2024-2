import { useState } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { incrementByAmount } from "../slices/counterSlice";
import { Button, Input } from "@material-tailwind/react";

export const IncrementAmount = () => {
    const [numero, setNumero] = useState('0');
    const dispatch = useAppDispatch();
    const doIncrement = () => {
        dispatch(incrementByAmount(parseInt(numero)))
    }
    return (
        <div>
            <h2>Incrementar por cantidad</h2>
            <Input type="number" onChange={(e) => {
                setNumero(e.target.value)
            }} />
            <Button onClick={doIncrement}>Incrementar</Button>
        </div>
    );
}