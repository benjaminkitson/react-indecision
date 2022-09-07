import Main from "../pages/Main";
import React, { useState, createContext, useContext } from "react";
import RandomContext from "./Random";

const MainContext = createContext();

// const pages = ["Main", "Dice"];

export function MainContextProvider({ children }) {
    const [options, setOptions] = useState([]);
    const { setNumber, number, setSelectedIndex } = useContext(RandomContext);

    const resetOptions = () => {
        setNumber(0);
        setSelectedIndex(null);
        setOptions([]);
    };

    const addOption = (option) => {
        if (option && !options.includes(option)) {
            setNumber(number + 1);
            setOptions(options.concat(option));
            // setSelected("Add some more stuff!");
        } else if (options.includes(option)) {
            // setSelected("No duplicates please!");
        }
    };

    const deleteOption = (index) => {
        setOptions(options.filter((_item, i) => i !== index));
        setNumber(number - 1);
    };

    const editOption = (option, index) => {
        const newOptions = options.map((oldOption, i) => {
            if (index === i) {
                return option;
            } else {
                return oldOption;
            }
        });
        setOptions(newOptions);
    };

    // const clearGenerated = () => {
    //   setSelected('Nothing yet.');
    // };

    const utils = {
        deleteOption,
        editOption,
        addOption,
        resetOptions,
        // selected,
        options,
    };

    return (
        <MainContext.Provider value={utils}>{children}</MainContext.Provider>
    );
}

export default MainContext;
