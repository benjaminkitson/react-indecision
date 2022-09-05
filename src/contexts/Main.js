import React from "react";
import Main from "../pages/Main";


const MainContext = React.createContext();

const pages = ["Main", "Dice"];

export function MainContextProvider({ children }) {
    return (
        <MainContext.Provider value={pages}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContext;
