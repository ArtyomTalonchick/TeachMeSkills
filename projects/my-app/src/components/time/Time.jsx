import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

import { withTtranslator } from "../../hoc/withTranslator";
import { getTime } from "../../helpers/timeHelper";

import { ReactComponent as TimeIcon } from "../../icons/time.svg";
import "./Time.scss";

const SHOW_TIME = "showTime";

function _Time({ translate }) {
    const [now, setNow] = useState(getTime());
    const [show, setShow] = useState(JSON.parse(localStorage.getItem(SHOW_TIME)));

    useEffect(() => {
        const intervalId = setInterval(() => setNow(getTime()), 10000);

        return () => clearInterval(intervalId);
    }, []);

    
    useEffect(() => {
        const intervalId2 = setInterval(() => setNow(getTime()), 3432423000);

        return () => clearInterval(intervalId2);
    }, []);

    useEffect(() => {
        document.title = `Time - ${now}`;
    }, [now]);

    const handleToggleTime = () => {
        setShow(!show);
        localStorage.setItem(SHOW_TIME, !show);
    }

    return (
        <div className="time-container">
            {show && <span>{now}</span>}
            
            <Tooltip title={translate("time.toggle.tooltip")}>
                <TimeIcon onClick={handleToggleTime}/>
            </Tooltip>
        </div>
    )
}

export const Time = withTtranslator(_Time);