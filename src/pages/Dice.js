import React, { useState, useContext, useEffect } from "react";
import RollDice from "../components/atoms/RollDice";
import RandomContext from "../contexts/Random";

import {
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill,
    BsFillDice6Fill,
} from "react-icons/bs";

export default function Dice() {
    const { selectedIndex, setDisabledButton } = useContext(RandomContext);
    const [display, setDisplay] = useState(selectedIndex);

    useEffect(() => {
        function tick(interval) {
            if (!isDisabled) setDisabledButton(true);
            setTimeout(() => {
                interval *= 1.3;
                const num = Math.floor(Math.random() * 6);
                if (interval <= 700) {
                    setDisplay(num);
                    tick(interval);
                } else {
                    setDisplay(selectedIndex);
                    setDisabledButton(false);
                }
            }, interval);
        }
        if (selectedIndex) {
            tick(5);
        }
        // ! Causes a bug where if selectedIndex doesn't change, the effect doesn't run
    }, [selectedIndex]);

    const options = [
        BsFillDice1Fill,
        BsFillDice2Fill,
        BsFillDice3Fill,
        BsFillDice4Fill,
        BsFillDice5Fill,
        BsFillDice6Fill,
    ];

    function BeforeRoll() {
        return (
            <div>
                <h1>Roll the dice!</h1>
            </div>
        );
    }

    // const [selection, setSelection] = useState(undefined);

    const [isDisabled, setIsDisabled] = useState(false);

    const Dice = options[display] || BeforeRoll;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            <Dice />
        </div>
    );
}
