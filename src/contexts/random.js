import React, { createContext, useState } from "react";

const RandomContext = createContext();

export function RandomContextProvider({ children }) {
    // const [number, setNumber] = useState(null);
    // ! Testing dice
    const [number, setNumber] = useState(6);

    const [disabledButton, setDisabledButton] = useState(false);


    const [selectedIndex, setSelectedIndex] = useState(null);

    const generate = () => {
        const num = Math.floor(Math.random() * number);
        setSelectedIndex(num);
    };

    // TODO: Make custom number setting functions;
    // TODO: Redux might be good for this;

    const values = {
        generate,
        selectedIndex,
        setSelectedIndex,
        number,
        setNumber,
        setDisabledButton,
        disabledButton,
    };

    return (
        <RandomContext.Provider value={values}>
            {children}
        </RandomContext.Provider>
    );
}

export default RandomContext;
