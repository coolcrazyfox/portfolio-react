import React, { createContext, useState } from "react";

export const MouseContext = createContext({
    cursorType: ""||"hovered",
    cursorChangeHandler: () => {}
});

const MouseContextProvider = (props:any) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursorType:any) => {
        setCursorType(cursorType);
    };



    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                // @ts-ignore
                cursorChangeHandler: cursorChangeHandler,
            }}
        >
            {props.children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;