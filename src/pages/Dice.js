import React, { useState } from "react";
import RollDice from "../components/atoms/RollDice";

import {
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill,
    BsFillDice6Fill,
} from "react-icons/bs";

export default function Dice() {
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

    const [selection, setSelection] = useState(undefined);

    const roll = () => {
        const num = Math.floor(Math.random() * 6) + 1;
        setSelection(num);
    };

    const Dice = selection ? options[selection - 1] : BeforeRoll;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            <div className={"flex grow items-center justify-center bg-white"}>
                <Dice />
            </div>
            <div className="flex h-40 w-full flex-col items-center justify-center bg-blue-500 p-5">
                <RollDice roll={roll} />
            </div>
        </div>
    );
}
