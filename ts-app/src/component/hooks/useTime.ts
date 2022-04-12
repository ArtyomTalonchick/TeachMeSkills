import { useState, useEffect } from 'react';

const getTime = () => (new Date()).toTimeString().substring(0, 8);

const useTime = () => {
    const [time, setTime] = useState<String>(getTime());

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return time;
}

export default useTime;