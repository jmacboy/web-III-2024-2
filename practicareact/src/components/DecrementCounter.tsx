import { Button } from "@material-tailwind/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { decrement } from "../slices/counterSlice";

export const DecrementCounter = () => {
    const dispatch = useAppDispatch();
    const doDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <Button onClick={doDecrement}>Disminuir</Button>
        </div>
    );
}