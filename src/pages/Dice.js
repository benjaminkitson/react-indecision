import React from "react";
import Header from "../components/Header";

import {
    BsFillDice1Fill,
    BsFillDice2Fill,
    BsFillDice3Fill,
    BsFillDice4Fill,
    BsFillDice5Fill,
    BsFillDice6Fill,
} from "react-icons/bs";

export default function Dice() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center text-9xl text-blue-700">
            <BsFillDice1Fill />
            <div className="flex h-40 w-full flex-col items-center justify-center bg-blue-500 p-5">
                Footer
            </div>
        </div>
    );
}
