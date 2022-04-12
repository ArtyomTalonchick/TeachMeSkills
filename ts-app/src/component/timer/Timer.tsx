import React, { useEffect, useState } from "react";

import "./Timer.scss";
import { ReactComponent as TimerIcon } from "../../assets/timer.svg";
import useTime from "../hooks/useTime";


const SHOW_TIME = "showTime";

const getShowTime = (): boolean => localStorage.getItem(SHOW_TIME) === "true";

const Timer: React.FC = () => {
    const [showTime, setShowTime] = useState<boolean>(getShowTime());
    const time = useTime();

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
