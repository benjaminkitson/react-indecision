import React from "react";
import Button from "../Button";

export default function RollDice({ roll }) {
    return (
        <div>
            <Button
                onClick={roll}
                className="m-3 h-20 w-80 text-5xl text-white"
                colour="blue"
            >
                ROLL
            </Button>
        </div>
    );
}
