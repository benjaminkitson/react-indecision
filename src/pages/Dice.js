import React, { useContext } from "react";
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
                <h1 className="text-6xl">Roll the dice!</h1>
            </div>
        );
    }

    const Dice = options[selectedIndex] || BeforeRoll;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-[250px] text-blue-700">
            <Dice />
        </div>
    );
}
