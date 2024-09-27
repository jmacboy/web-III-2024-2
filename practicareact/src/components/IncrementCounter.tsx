import { Button } from "@material-tailwind/react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { increment } from "../slices/counterSlice";

export const IncrementCounter = () => {
    const dispatch = useAppDispatch();
    const doIncrement = () => {
        dispatch(increment())
    }
    return (
        <div>
            <Button onClick={doIncrement}>Incrementar</Button>
        </div>
    );
}