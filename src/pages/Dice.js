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

    const [isDisabled, setIsDisabled] = useState(false);

    const roll = () => {
        setIsDisabled(true);
        let counter = 0;
        const interval = setInterval(() => {
            const num = Math.floor(Math.random() * 6) + 1;
            setSelection(num);
            counter++;
            if (counter > 8) {
                clearInterval(interval);
                setIsDisabled(false);
            }
        }, 200);
    };

    const Dice = selection ? options[selection - 1] : BeforeRoll;

    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            <div className={"flex grow items-center justify-center bg-white"}>
                <Dice />
            </div>
            <div className="flex h-40 w-full flex-col items-center justify-center bg-blue-500 p-5">
                <RollDice roll={roll} disabled={isDisabled}/>
            </div>
        </div>
    );
}
