import React, { useEffect, useState } from "react";

import "./Timer.scss";
import { ReactComponent as TimerIcon } from "../../assets/timer.svg";


const getTime = () => (new Date()).toTimeString().substring(0, 8);
// const getTime = () => Date.now().toString();

const SHOW_TIME = "showTime";

const getShowTime = (): boolean => localStorage.getItem(SHOW_TIME) === "true";

const Timer: React.FC = () => {

    const [time, setTime] = useState<String>(getTime());
    const [showTime, setShowTime] = useState<boolean>(getShowTime());

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
            // console.log("callBack", intervalId);
        }, 1000);

        // console.log("setedInterval", intervalId);

        return () => {
            clearInterval(intervalId);
            // console.log("deletedInterval", intervalId);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SHOW_TIME, showTime.toString());
    }, [showTime]);

    const handleClick = () => {
        setShowTime((prevValue) => !prevValue);
    }

    return (
        <div className="timer-container">
            {showTime &&
                <div className="time">
                    Time: {time}
                </div>
            }
            <TimerIcon
                onClick={handleClick}
                className="icon-button"
            />

        </div>
    )
}

export default Timer;
