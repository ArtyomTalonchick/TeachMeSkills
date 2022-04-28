import React from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";

const Clicker: React.FC = () => {

    const count = useSelector(state => state.clicker.value);
    const { setValue, shiftValue } = useActions();
    

    const reset = () => setValue(0);
    const increment = () => shiftValue(1);
    const decriment = () => shiftValue(-1);

    return (
        <div>
            <button onClick={reset}>
                reset
            </button>
            <button onClick={decriment}>
                -
            </button>
            <span>
                {count}
            </span>
            <button onClick={increment}>
                +
            </button>
          
            
        </div>
    )
}

export default Clicker;