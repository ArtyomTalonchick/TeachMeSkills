import { useDispatch, useSelector } from "react-redux";
import { shiftValue } from "../../store/clicker/actions";

import "./Clicker.scss";

const Clicker = () => {
    const dispatch = useDispatch();
    const clickValue = useSelector(state => state.clicker.value);

    const handleClick = (arg, e) => {
        e.preventDefault();
        dispatch(shiftValue(arg));
    }
    
    return (
        <div className="clicker">
            <span className="clicker__label">{clickValue}</span>
            <div>
                <button onClick={(e) => handleClick(+1, e)}>+</button>
                <button onClick={(e) => handleClick(-1, e)}>-</button>
            </div>
        </div>
    )
}

export default Clicker;