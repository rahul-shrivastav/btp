import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 10 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = -1;
        const interval = setInterval(() => {
            index++;
            setDisplayedText((prev) => prev + text.charAt(index));
            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <div className="break-words overflow-wrap w-full p-15  h-full">
            {displayedText.slice(1)}
        </div>
    );
};

export default Typewriter;
