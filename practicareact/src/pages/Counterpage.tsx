import { DecrementCounter } from "../components/DecrementCounter";
import { IncrementAmount } from "../components/IncrementAmount";
import { IncrementCounter } from "../components/IncrementCounter";
import { NavMenu } from "../components/NavMenu";
import { useAppSelector } from "../hooks/reduxHooks";

export const CounterPage = () => {
    const contador = useAppSelector(state => state.counter.value);
    return (
        <div>
            <NavMenu />
            <div className="px-4 py-2 ">
                <h2>El contador está en: {contador}</h2>
                <IncrementCounter />
                <DecrementCounter />
                <IncrementAmount />
            </div>
        </div>
    );
}