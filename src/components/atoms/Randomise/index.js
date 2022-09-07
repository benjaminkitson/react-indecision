import React from "react";
import { useContext } from "react";
import Button from "../Button";
import RandomContext from "../../../contexts/Random";

export default function Randomise() {
    const { generate, number, disabledButton } = useContext(RandomContext);

    return (
        <div>
            <Button
                onClick={generate}
                className="m-3 h-20 w-80 text-5xl text-white"
                colour="blue"
                disabled={!number || disabledButton}
            >
                GENERATE
            </Button>
        </div>
    );
}
