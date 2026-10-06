import { useState, useEffect } from "react";

function Clock() {
    const [time, Settime] = useState("");

    useEffect(() => {
        setInterval(() => {
            Settime(new Date().toLocaleTimeString());
        }, 1000);
         return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <h2>{time}</h2>
        </>
    );
}

export default Clock;