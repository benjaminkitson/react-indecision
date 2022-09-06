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

    const [selection, setSelection] = useState(undefined);

    const roll = () => {
        const num = Math.floor(Math.random() * 6);
        setSelection(num);
    };

    const Dice = selection ? options[selection] : null;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            {!!selection.toString() && <Dice />}
            <div className="flex h-40 w-full flex-col items-center justify-center bg-blue-500 p-5">
                <RollDice roll={roll} />
            </div>
        </div>
    );
}
