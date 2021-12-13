import React, { useEffect, useState } from "react";

const getTime = () => new Date().toTimeString().substring(0, 8);

export function Time () {
    const [now, setNow] = useState(getTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick");
            setNow(getTime());
        }, 1000);

        return () => clearInterval(intervalId)
    }, []);

    return (
        <span>{now}</span>
    )
}