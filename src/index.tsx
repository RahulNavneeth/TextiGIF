import React, { useState, useRef, useEffect } from 'react';

interface TextiGIFProps {
    text?: string;
    url?: string;
    color?: string;
    width?: string;
    position?: "TOP" | "BOTTOM";
};

const TextiGIF: React.FC<TextiGIFProps> = ({ text = "TEXTIGIF", url = "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif", color = "black", width = "300px", position = "TOP" }) => {
    const [show, setShow] = useState(false);
    const [x, setX] = useState(0);
    const [left, setLeft] = useState(0);

    const ref = useRef<HTMLElement>(null);


    useEffect(() => {
        setLeft(ref.current?.offsetLeft || 0);
    }, []);

    text = text.length > 0 ? text : "TEXTIGIF";
    url = url.length > 0 ? url : "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif";
    color = color.length > 0 ? color : "black";
    width = width.length > 0 ? width : "300px";
    position = position.length > 0 ? position : "TOP";

    return (
        <span
            ref={ref}
            onMouseMove={(e) => { setX(e.clientX - left - 130); }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{ position: "relative", color, fontStyle: "italic", marginRight: "0.5rem", cursor: "pointer" }}
        >
            {text}
            {show && (
                <img
                    onMouseEnter={() => setShow(false)}
                    src={url}
                    style={{
                        position: "absolute",
                        width,
                        left: x,
                        zIndex: 1000,
                        ...(position === "BOTTOM" ? { top: "100%" } : { bottom: "100%" }),
                    }}
                    alt="GIF"
                />
            )}
        </span>
    );
};

export default TextiGIF;
