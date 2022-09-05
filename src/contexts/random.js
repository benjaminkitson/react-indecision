import React from "react";

const RandomContext = React.createContext();

function RandomContextProvider({ children }) {
    return (
        <RandomContext.Provider value={utils}>
            { children }
        </RandomContext.Provider>
    )
}

export default RandomContext;
