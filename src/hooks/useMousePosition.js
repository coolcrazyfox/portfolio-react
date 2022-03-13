import React, { useEffect, useState } from "react";


export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        // @ts-ignore
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return mousePosition;
}