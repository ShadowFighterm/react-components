import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        // Cleanup function to stop the interval
        return () => clearInterval(interval);
    }, []); // Empty array makes it run only once after the first render

    return <p>Timer: {seconds} seconds</p>;
}

export default Timer;
