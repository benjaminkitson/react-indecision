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
    const { selectedIndex } = useContext(RandomContext);

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

    const Dice = options[selectedIndex] || BeforeRoll;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            <Dice />
        </div>
    );
}
