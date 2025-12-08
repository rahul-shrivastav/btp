import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSea } from "react-syntax-highlighter/dist/esm/styles/prism";

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
    const customStyle = {
        ...duotoneSea,
        'code[class*="language-"]': {
            ...duotoneSea['code[class*="language-"]'],
            background: "transparent",
        },
        'pre[class*="language-"]': {
            ...duotoneSea['pre[class*="language-"]'],
            background: "transparent",
        },
    };
    return (
        <div className="overflow-clip w-full h-full">
            <SyntaxHighlighter language="python" style={customStyle}>
                {displayedText.slice(1)}
            </SyntaxHighlighter>
        </div>
    );
};

export default Typewriter;
