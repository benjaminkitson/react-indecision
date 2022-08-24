import React from "react";
import Button from "../Button";

function Generate({ generate, hasOptions }) {
    return (
        <div>
            <Button
                onClick={generate}
                className="m-3 h-20 w-80 text-5xl text-white"
                colour="blue"
                disabled={!hasOptions}
            >
                GENERATE
            </Button>
        </div>
    );
}

export default Generate;
