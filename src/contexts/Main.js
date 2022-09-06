import Main from "../pages/Main";
import React, { useState, createContext } from "react";

const MainContext = createContext();

// const pages = ["Main", "Dice"];

export function MainContextProvider({ children }) {
    const [selected, setSelected] = useState("");
    const [options, setOptions] = useState([]);

    const resetOptions = () => {
        setOptions([]);
    };

    const addOption = (option) => {
        if (option && !options.includes(option)) {
            setOptions(options.concat(option));
            setSelected("Add some more stuff!");
        } else if (options.includes(option)) {
            setSelected("No duplicates please!");
        }
    };

    const deleteOption = (index) => {
        setOptions(options.filter((_item, i) => i !== index));
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

    const generate = () => {
        const num = Math.floor(Math.random() * options.length);
        setSelected(options[num]);
    };

    const utils = {
        deleteOption,
        editOption,
        addOption,
        generate,
        resetOptions,
        selected,
        options,
    };

    return (
        <MainContext.Provider value={utils}>{children}</MainContext.Provider>
    );
}

export default MainContext;
