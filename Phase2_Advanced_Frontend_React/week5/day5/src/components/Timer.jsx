import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("from inside interval");
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <div>{seconds} seconds elapsed</div>;
};

export default Timer;