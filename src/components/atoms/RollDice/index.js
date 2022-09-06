import React from "react";
import Button from "../Button";

export default function RollDice({ roll, disabled }) {
    return (
        <div>
            <Button
                onClick={roll}
                className="m-3 h-20 w-80 text-5xl text-white"
                colour="blue"
                disabled={disabled}
            >
                ROLL
            </Button>
        </div>
    );
}
