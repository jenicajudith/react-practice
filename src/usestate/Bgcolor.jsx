import { useState, useEffect } from "react";

function Color() {
    const [color, Setcolor] = useState("white");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <>
            <select onChange={(e) => Setcolor(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </>
    );
}

export default Color;