import React, { useEffect, useState } from "react";


const getTime = () => (new Date()).toTimeString().substring(0, 8);
// const getTime = () => Date.now().toString();

const Timer: React.FC = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
            console.log("callBack", intervalId);
        }, 1000);

        console.log("setedInterval", intervalId);

        return () => {
            clearInterval(intervalId);
            console.log("deletedInterval", intervalId);
        }
    }, []);


    return (
        <div>
           Time: {time}
        </div>
    )
}

export default Timer;