import React, { useEffect, useState } from "react";

// let value: any;

// const _setValue = (arg: any) => {

//     if (typeof arg === "function") {
//         // callback

//         value = arg(value);
//     } else {
//         // value

//         value = arg;
//     }

//     // Rerender
//     // Clicker()
// }

// const isFirstCall = false; // ????

// const _useState = (defaultValue: any) => {

//     // if (isFirstCall) {
//     //     value = defaultValue;
//     // }

//     return [value, _setValue]
// }


const Clicker: React.FC = () => {
    const PI = 3.14;

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        // console.log(count, count2, PI);
    }, [count, count2]);

    const increment = () => {
        // setCount((prevCount) => prevCount + 1);
        setCount2((prevCount) => prevCount + 1);
    }

    const decriment = () => {
        setCount((prevCount) => prevCount - 1);
    }

    return (
        <div>
            <button onClick={decriment}>
                -
            </button>
            <span>
                {count}
            </span>
            <span>
                '  '  
            </span>
            <span>
                {count2}
            </span>
            <button onClick={increment}>
                +
            </button>
            {/* {count < 5 &&
                <button
                    style={{ background: count % 2 ? "red" : "green" }}
                    onClick={increment}
                >
                    +
                </button>
                } */}
            
        </div>
    )
}

export default Clicker;