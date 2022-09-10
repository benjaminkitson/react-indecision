import React, { createContext, useState } from "react";

const RandomContext = createContext();

export function RandomContextProvider({ children }) {
    // ! Testing dice
    const [number, setNumber] = useState(6);
    const isDice = true;

    const [disabledButton, setDisabledButton] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(null);

    function getRandomIndex(options = {}) {
        //TODO: Later tweak this to incorporate min and max numbers
        const { allowRepeat } = options;
        let num = Math.floor(Math.random() * number);
        if (!allowRepeat && num === selectedIndex) {
            return getRandomIndex({
                allowRepeat: false,
            });
        } else {
            return num;
        }
    }

    function animateDice(interval) {
        if (!disabledButton) setDisabledButton(true);
        setTimeout(() => {
            interval *= 1.3;
            if (interval <= 700) {
                const num = getRandomIndex({
                    allowRepeat: false,
                });
                setSelectedIndex(num);
                animateDice(interval);
            } else {
                const num = getRandomIndex({
                    allowRepeat: true,
                });
                setSelectedIndex(num);
                setDisabledButton(false);
            }
        }, interval);
    }

    const generate = () => {
        if (isDice) {
            animateDice(5);
        } else {
            const num = getRandomIndex({
                allowRepeat: true,
            });
            setSelectedIndex(num);
        }
    };

    // TODO: Make custom number setting functions;
    // TODO: Redux might be good for this;

    const values = {
        generate,
        selectedIndex,
        setSelectedIndex,
        number,
        setNumber,
        disabledButton,
        setDisabledButton,
    };

    return (
        <RandomContext.Provider value={values}>
            {children}
        </RandomContext.Provider>
    );
}

export default RandomContext;
